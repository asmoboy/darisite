// Supabase Edge Function: empfängt Stripe-Webhooks und schaltet Pläne automatisch frei.
// Benötigte Secrets: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET
// (SUPABASE_URL und SUPABASE_SERVICE_ROLE_KEY stellt Supabase automatisch bereit.)

const enc = new TextEncoder();
const hex = (buf: ArrayBuffer) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");

async function verifySignature(payload: string, header: string | null, secret: string) {
  if (!header) return false;
  const parts = header.split(",");
  const t = parts.find((p) => p.startsWith("t="))?.slice(2);
  const signatures = parts.filter((p) => p.startsWith("v1=")).map((p) => p.slice(3));
  if (!t || Math.abs(Date.now() / 1000 - Number(t)) > 300) return false;
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const expected = hex(await crypto.subtle.sign("HMAC", key, enc.encode(`${t}.${payload}`)));
  return signatures.includes(expected);
}

async function stripe(path: string) {
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    headers: { Authorization: `Bearer ${Deno.env.get("STRIPE_SECRET_KEY")}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message ?? `Stripe-Fehler ${res.status}`);
  return data;
}

async function saveSubscription(row: Record<string, unknown>) {
  const url = Deno.env.get("SUPABASE_URL");
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const res = await fetch(`${url}/rest/v1/subscriptions?on_conflict=stripe_subscription_id`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify(row),
  });
  if (!res.ok) throw new Error(`Supabase-Fehler ${res.status}: ${await res.text()}`);
}

// Abo aus Stripe laden und in Supabase speichern
async function syncSubscription(subscriptionId: string, extra: { email?: string; userId?: string } = {}) {
  const sub = await stripe(`subscriptions/${subscriptionId}?expand[]=customer&expand[]=items.data.price.product`);
  const item = sub.items.data[0];
  const price = item?.price;
  const lookup = /^kreisel_([a-z]+)_(monthly|yearly)$/.exec(price?.lookup_key ?? "");
  const periodEnd = item?.current_period_end ?? sub.current_period_end;
  const email = (extra.email ?? sub.customer?.email ?? "").toLowerCase();
  if (!email) throw new Error(`Keine E-Mail für Abo ${subscriptionId}`);

  const row: Record<string, unknown> = {
    stripe_subscription_id: sub.id,
    stripe_customer_id: typeof sub.customer === "string" ? sub.customer : sub.customer?.id,
    email,
    plan: lookup ? lookup[1][0].toUpperCase() + lookup[1].slice(1) : price?.product?.name ?? "Unbekannt",
    billing: lookup ? lookup[2] : price?.recurring?.interval === "year" ? "yearly" : "monthly",
    status: sub.status,
    cancel_at_period_end: !!sub.cancel_at_period_end,
    current_period_end: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
    updated_at: new Date().toISOString(),
  };
  if (extra.userId) row.user_id = extra.userId;
  await saveSubscription(row);
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Nur POST erlaubt", { status: 405 });

  const payload = await req.text();
  const valid = await verifySignature(payload, req.headers.get("stripe-signature"), Deno.env.get("STRIPE_WEBHOOK_SECRET") ?? "");
  if (!valid) return new Response("Ungültige Signatur", { status: 400 });

  const event = JSON.parse(payload);
  const obj = event.data.object;

  try {
    switch (event.type) {
      case "checkout.session.completed":
        if (obj.mode === "subscription" && obj.subscription) {
          await syncSubscription(obj.subscription, {
            email: obj.customer_details?.email,
            userId: UUID_RE.test(obj.client_reference_id ?? "") ? obj.client_reference_id : undefined,
          });
        }
        break;
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        await syncSubscription(obj.id);
        break;
      case "invoice.paid":
      case "invoice.payment_failed": {
        const subId = obj.subscription ?? obj.parent?.subscription_details?.subscription;
        if (subId) await syncSubscription(subId);
        break;
      }
    }
  } catch (err) {
    console.error(event.type, err);
    return new Response("Fehler bei der Verarbeitung", { status: 500 }); // Stripe versucht es später erneut
  }

  return new Response(JSON.stringify({ received: true }), { headers: { "Content-Type": "application/json" } });
});
