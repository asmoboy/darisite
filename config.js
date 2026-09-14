// Zentrale Einstellungen – wird von allen Seiten geladen.
const CONTACT_EMAIL = "officekolorao@gmail.com";

// Supabase (Konten): Dashboard → Project Settings → API.
// Der "anon public" Key darf öffentlich im Code stehen – die Daten schützt Row Level Security (supabase/schema.sql).
const SUPABASE_URL = "https://cuochwrzrjdsceivawpi.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_jyAa0oz-SMNBkWD9kcZ_vA_jElF-egp";

// Stripe-Zahlungslinks erzeugt die Supabase Edge Function "payment-link"
// (supabase/functions/payment-link). Der geheime Stripe-Key liegt nur dort als Secret.

document.querySelectorAll("[data-mail]").forEach((a) => {
  a.href = `mailto:${CONTACT_EMAIL}`;
  if (!a.textContent.trim()) a.textContent = CONTACT_EMAIL;
});
