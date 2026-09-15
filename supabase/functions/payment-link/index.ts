// Supabase Edge Function: erstellt den Stripe-Zahlungslink für einen Plan und
// schickt ihn per E-Mail (Resend) an den Kunden – plus Benachrichtigung an dich.
// Preis und Payment Link werden beim ersten Aufruf in Stripe angelegt und danach wiederverwendet.
//
// Secrets: STRIPE_SECRET_KEY, RESEND_API_KEY
// Optional: OWNER_EMAIL (Standard officekolorao@gmail.com), SITE_URL (Standard https://kreiselservices.app),
//           MAIL_FROM (Standard "kreisel <noreply@kreiselservices.app>")

const PLANS: Record<string, number> = { Starter: 3490, Pro: 8900, Business: 24000 }; // Cent pro Monat
const YEARLY_MONTHS = 10; // jährlich = 2 Monate gratis

const SITE_URL = Deno.env.get("SITE_URL") ?? "https://kreiselservices.app";
const OWNER_EMAIL = Deno.env.get("OWNER_EMAIL") ?? "officekolorao@gmail.com";
const MAIL_FROM = Deno.env.get("MAIL_FROM") ?? "kreisel <noreply@kreiselservices.app>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PRODUCT_NAME = (plan: string, yearly: boolean) =>
  `Community-Plattform – ${plan} (${yearly ? "jährlich" : "monatlich"})`;

// Bestellnummer wie TOP-6C7ASVRM (ohne verwechselbare Zeichen wie 0/O, 1/I)
function orderNumber() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  return "TOP-" + [...bytes].map((b) => chars[b % chars.length]).join("");
}

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

const euro = (cents: number) =>
  (cents / 100).toLocaleString("de-AT", { style: "currency", currency: "EUR" });

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

// Legt für jede Bestellung einen eigenen, einmal nutzbaren Payment Link an,
// damit jede Zahlung und jedes Abo in Stripe die Bestellnummer trägt.
async function createPaymentLink(plan: string, billing: "monthly" | "yearly", order: string) {
  const yearly = billing === "yearly";
  const key = `kreisel_${plan.toLowerCase()}_${billing}`;

  const productName = PRODUCT_NAME(plan, yearly);
  let price = (await stripe("GET", `prices?lookup_keys[]=${key}&active=true&limit=1&expand[]=data.product`)).data[0];
  if (!price) {
    price = await stripe("POST", "prices", {
      currency: "eur",
      unit_amount: String(yearly ? PLANS[plan] * YEARLY_MONTHS : PLANS[plan]),
      "recurring[interval]": yearly ? "year" : "month",
      lookup_key: key,
      "product_data[name]": productName,
    });
  } else if (price.product?.name !== productName) {
    await stripe("POST", `products/${price.product.id}`, { name: productName });
  }

  // Nach der Zahlung bleibt der Kunde auf der Stripe-Bestätigungsseite (keine Weiterleitung)
  const confirmation = {
    "after_completion[type]": "hosted_confirmation",
    "after_completion[hosted_confirmation][custom_message]":
      "Danke für deine Zahlung! Die Bestätigung kommt per E-Mail.",
  };
  const link = await stripe("POST", "payment_links", {
    "line_items[0][price]": price.id,
    "line_items[0][quantity]": "1",
    ...confirmation,
    "restrictions[completed_sessions][limit]": "1", // Link kann nur einmal bezahlt werden
    "custom_text[submit][message]": `Bestellnummer: ${order}`,
    "metadata[order]": order,
    "subscription_data[description]": order,
    "subscription_data[metadata][order]": order,
  });
  return { url: link.url as string, amount: price.unit_amount as number };
}

async function sendMail(mail: { to: string; subject: string; html: string; replyTo?: string }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: MAIL_FROM,
      to: [mail.to],
      subject: mail.subject,
      html: mail.html,
      ...(mail.replyTo ? { reply_to: mail.replyTo } : {}),
    }),
  });
  if (!res.ok) throw new Error(`Resend-Fehler ${res.status}: ${await res.text()}`);
}

const layout = (content: string) => `
<div style="background:#f8f7f4;padding:32px 16px;font-family:Inter,Segoe UI,Arial,sans-serif;color:#111">
  <div style="max-width:520px;margin:0 auto;background:#fff;border:1px solid #e4e2dd;border-radius:16px;padding:32px">
    <p style="margin:0 0 24px;font-size:22px;font-weight:800;letter-spacing:-0.03em">
      <span style="display:inline-block;width:22px;height:22px;border-radius:7px;background:linear-gradient(135deg,#3b82f6,#7c3aed);vertical-align:-3px;margin-right:6px"></span>kreisel
    </p>
    ${content}
  </div>
  <p style="max-width:520px;margin:16px auto 0;color:#9a9a9a;font-size:12px;text-align:center">
    VTORA e.U. · Korngasse 5b · 2700 Katzelsdorf · Österreich · <a href="${SITE_URL}/impressum.html" style="color:#9a9a9a">Impressum</a>
  </p>
</div>`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Nur POST erlaubt" }, 405);

  try {
    const body = await req.json();
    const plan = String(body.plan ?? "");
    const billing = body.billing === "yearly" ? "yearly" : body.billing === "monthly" ? "monthly" : null;
    const name = String(body.name ?? "").trim().slice(0, 100);
    const email = String(body.email ?? "").trim().toLowerCase();
    const message = String(body.message ?? "").trim().slice(0, 2000);

    if (!PLANS[plan] || !billing) return json({ error: "Ungültiger Plan" }, 400);
    if (!name || !EMAIL_RE.test(email)) return json({ error: "Name oder E-Mail fehlt" }, 400);

    const order = orderNumber();
    const { url, amount } = await createPaymentLink(plan, billing, order);
    const params = new URLSearchParams({ prefilled_email: email, client_reference_id: order });
    const payUrl = `${url}?${params}`;

    const billingText = billing === "yearly" ? "jährlich (2 Monate gratis)" : "monatlich";
    const priceText = `${euro(amount)} ${billing === "yearly" ? "pro Jahr" : "pro Monat"}`;

    await sendMail({
      to: email,
      subject: `Dein Zahlungslink für ${plan} – Bestellung ${order}`,
      replyTo: OWNER_EMAIL,
      html: layout(`
        <h1 style="margin:0 0 12px;font-size:24px;letter-spacing:-0.03em">Hallo ${esc(name)},</h1>
        <p style="margin:0 0 20px;color:#3f3f3f;line-height:1.6">danke für deine Anfrage! Hier ist dein persönlicher Zahlungslink für den Plan <strong>${plan}</strong> (${billingText}, ${priceText}).</p>
        <p style="margin:0 0 20px;padding:12px 16px;background:#f8f7f4;border-radius:10px;font-size:14px;color:#3f3f3f">Deine Bestellnummer: <strong style="font-family:Consolas,monospace;color:#111">${order}</strong></p>
        <p style="margin:0 0 24px;text-align:center">
          <a href="${payUrl}" style="display:inline-block;background:#2563eb;color:#fff;text-decoration:none;font-weight:600;padding:14px 28px;border-radius:999px">Jetzt sicher bezahlen</a>
        </p>
        <p style="margin:0 0 12px;color:#3f3f3f;line-height:1.6">Du bezahlst im offiziellen Stripe-Checkout per Karte, Apple Pay oder Google Pay. Direkt nach der Zahlung wird dein Plan automatisch freigeschaltet – du siehst ihn in deinem kreisel-Konto mit dieser E-Mail-Adresse.</p>
        <p style="margin:0 0 20px;color:#6b6b6b;font-size:13px;line-height:1.6">Falls der Button nicht funktioniert, kopiere diesen Link in deinen Browser:<br><a href="${payUrl}" style="color:#2563eb;word-break:break-all">${payUrl}</a></p>
        <p style="margin:0;color:#3f3f3f">Viele Grüße<br>dein kreisel-Team</p>`),
    });

    // Benachrichtigung an dich – ein Fehler hier soll die Kunden-Mail nicht blockieren
    try {
      await sendMail({
        to: OWNER_EMAIL,
        subject: `${order} – Neue Plan-Anfrage: ${plan} (${billingText}) – ${name}`,
        replyTo: email,
        html: layout(`
          <h1 style="margin:0 0 16px;font-size:20px">Neue Plan-Anfrage</h1>
          <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6">
            <tr><td style="color:#6b6b6b;padding:4px 12px 4px 0">Bestellnummer</td><td><strong style="font-family:Consolas,monospace">${order}</strong></td></tr>
            <tr><td style="color:#6b6b6b;padding:4px 12px 4px 0">Name</td><td>${esc(name)}</td></tr>
            <tr><td style="color:#6b6b6b;padding:4px 12px 4px 0">E-Mail</td><td>${esc(email)}</td></tr>
            <tr><td style="color:#6b6b6b;padding:4px 12px 4px 0">Plan</td><td>${plan} · ${billingText} · ${priceText}</td></tr>
            <tr><td style="color:#6b6b6b;padding:4px 12px 4px 0;vertical-align:top">Nachricht</td><td>${message ? esc(message).replace(/\n/g, "<br>") : "–"}</td></tr>
          </table>
          <p style="margin:16px 0 0;color:#6b6b6b;font-size:13px">Der Zahlungslink wurde automatisch verschickt. In Stripe findest du die Zahlung, indem du nach der Bestellnummer suchst (Feld „Client-Referenz-ID“).</p>`),
      });
    } catch (err) {
      console.error("Benachrichtigung fehlgeschlagen", err);
    }

    return json({ sent: true, order });
  } catch (err) {
    console.error(err);
    return json({ error: "Zahlungslink konnte nicht verschickt werden" }, 500);
  }
});
