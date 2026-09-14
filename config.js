// Zentrale Einstellungen – wird von allen Seiten geladen.
const CONTACT_EMAIL = "hallo@kreisel.de"; // TODO: eigene Adresse eintragen

// Supabase (Konten): Dashboard → Project Settings → API.
// Der "anon public" Key darf öffentlich im Code stehen – die Daten schützt Row Level Security (supabase/schema.sql).
const SUPABASE_URL = "";      // z. B. "https://abcdefgh.supabase.co"
const SUPABASE_ANON_KEY = ""; // "eyJhbGciOi…"

// Stripe Payment Links pro Plan (aus dem Stripe-Dashboard → Zahlungslinks).
// Ist ein Link eingetragen, bekommt der Kunde ihn nach der Anfrage automatisch per E-Mail.
// Bleibt ein Feld leer, bekommt er eine Bestätigung und du schickst den Link selbst.
const STRIPE_LINKS = {
  Starter:  { monthly: "", yearly: "" },
  Pro:      { monthly: "", yearly: "" },
  Business: { monthly: "", yearly: "" },
};

document.querySelectorAll("[data-mail]").forEach((a) => {
  a.href = `mailto:${CONTACT_EMAIL}`;
  if (!a.textContent.trim()) a.textContent = CONTACT_EMAIL;
});
