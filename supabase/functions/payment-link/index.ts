// Supabase Edge Function: liefert den Stripe-Zahlungslink für einen Plan.
// Legt Preis und Payment Link beim ersten Aufruf automatisch in Stripe an
// und verwendet sie danach wieder. Benötigt das Secret STRIPE_SECRET_KEY.

const PLANS: Record<string, number> = { Starter: 3490, Pro: 8900, Business: 24000 }; // Cent pro Monat
const YEARLY_MONTHS = 10; // jährlich = 2 Monate gratis

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

async function stripe(method: "GET" | "POST", path: string, params?: Record<string, string>) {
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${Deno.env.get("STRIPE_SECRET_KEY")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params ? new URLSearchParams(params) : undefined,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message ?? `Stripe-Fehler ${res.status}`);
  return data;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Nur POST erlaubt" }, 405);

  try {
    const { plan, billing } = await req.json();
    const monthly = PLANS[plan];
    if (!monthly || !["monthly", "yearly"].includes(billing)) return json({ error: "Ungültiger Plan" }, 400);

    const yearly = billing === "yearly";
    const key = `kreisel_${plan.toLowerCase()}_${billing}`;

    let price = (await stripe("GET", `prices?lookup_keys[]=${key}&active=true&limit=1`)).data[0];
    if (!price) {
      price = await stripe("POST", "prices", {
        currency: "eur",
        unit_amount: String(yearly ? monthly * YEARLY_MONTHS : monthly),
        "recurring[interval]": yearly ? "year" : "month",
        lookup_key: key,
        "product_data[name]": `kreisel ${plan} (${yearly ? "jährlich" : "monatlich"})`,
      });
    }

    const links = await stripe("GET", "payment_links?active=true&limit=100");
    let link = links.data.find((l: { metadata?: Record<string, string> }) => l.metadata?.kreisel_key === key);
    if (!link) {
      link = await stripe("POST", "payment_links", {
        "line_items[0][price]": price.id,
        "line_items[0][quantity]": "1",
        "metadata[kreisel_key]": key,
      });
    }

    return json({ url: link.url });
  } catch (err) {
    console.error(err);
    return json({ error: "Zahlungslink konnte nicht erstellt werden" }, 500);
  }
});
