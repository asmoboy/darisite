// Interne Angebotsseite: Zahlungslink mit freiem Betrag erstellen und per E-Mail schicken.
// Die eigentliche Berechtigung prüft die Edge Function anhand des angemeldeten Kontos.
const sb = window.supabase && SUPABASE_URL && SUPABASE_ANON_KEY
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

const $loginCard = document.getElementById("login-card");
const $offerCard = document.getElementById("offer-card");
const $loginForm = document.getElementById("login-form");
const $loginError = document.getElementById("login-error");
const $offerForm = document.getElementById("offer-form");
const $offerError = document.getElementById("offer-error");
const $offerSuccess = document.getElementById("offer-success");
const $who = document.getElementById("who");
const $logout = document.getElementById("logout");

const euro = (n) => n.toLocaleString("de-AT", { style: "currency", currency: "EUR" });
const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function showFor(session) {
  const email = session?.user?.email ?? "";
  const isOwner = email.toLowerCase() === CONTACT_EMAIL.toLowerCase();
  $loginCard.hidden = isOwner;
  $offerCard.hidden = !isOwner;
  $who.hidden = !email;
  $who.textContent = email;
  $logout.hidden = !email;
  if (email && !isOwner) {
    $loginError.textContent = "Dieses Konto darf keine Angebote erstellen.";
    $loginError.hidden = false;
    $loginCard.hidden = false;
  }
}

if (!sb) {
  $loginError.textContent = "Konten sind gerade nicht verfügbar.";
  $loginError.hidden = false;
  $loginCard.hidden = false;
} else {
  sb.auth.onAuthStateChange((_event, session) => setTimeout(() => showFor(session), 0));
}

$logout.addEventListener("click", async () => {
  await sb?.auth.signOut();
  showFor(null);
});

$loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData($loginForm));
  const btn = $loginForm.querySelector('[type="submit"]');
  $loginError.hidden = true;
  btn.disabled = true;
  try {
    const { error } = await sb.auth.signInWithPassword({
      email: (data.email || "").trim().toLowerCase(),
      password: data.password || "",
    });
    if (error) throw error;
  } catch {
    $loginError.textContent = "E-Mail-Adresse oder Passwort ist falsch.";
    $loginError.hidden = false;
  } finally {
    btn.disabled = false;
  }
});

$offerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData($offerForm));
  const amount = Number(data.amount);
  const btn = $offerForm.querySelector('[type="submit"]');

  if (!data.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    $offerError.textContent = "Bitte Name und gültige E-Mail des Kunden angeben.";
    $offerError.hidden = false;
    return;
  }
  if (!data.description.trim()) {
    $offerError.textContent = "Bitte eine Leistung eintragen.";
    $offerError.hidden = false;
    return;
  }
  if (!Number.isFinite(amount) || amount < 1 || amount > 50000) {
    $offerError.textContent = "Der Betrag muss zwischen 1 € und 50.000 € liegen.";
    $offerError.hidden = false;
    return;
  }

  $offerError.hidden = true;
  const label = btn.textContent;
  btn.disabled = true;
  btn.textContent = "Wird gesendet…";

  try {
    const { data: res, error } = await sb.functions.invoke("payment-link", {
      body: {
        kind: "offer",
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        description: data.description.trim(),
        reference: (data.reference || "").trim(),
        message: (data.message || "").trim(),
        amount,
      },
    });
    if (error || !res?.sent) throw error || new Error("Senden fehlgeschlagen");

    $offerForm.hidden = true;
    $offerSuccess.hidden = false;
    $offerSuccess.innerHTML = `
      <div class="request__check" aria-hidden="true">✓</div>
      <h3>Angebot verschickt</h3>
      <p>${escapeHtml(data.email)} hat das Angebot über ${euro(amount)} erhalten.</p>
      <p class="request__order">Bestellnummer <strong>${escapeHtml(res.order)}</strong></p>
      <p class="request__small"><a href="${res.url}" target="_blank" rel="noopener">Zahlungslink öffnen</a></p>
      <button class="btn-ghost" type="button" id="offer-again">Weiteres Angebot erstellen</button>`;
    document.getElementById("offer-again").addEventListener("click", () => {
      $offerForm.reset();
      $offerForm.hidden = false;
      $offerSuccess.hidden = true;
    });
  } catch (err) {
    const msg = String(err?.message || "");
    $offerError.textContent = msg.includes("403") || msg.includes("berechtigt")
      ? "Dieses Konto darf keine Angebote erstellen."
      : "Das Angebot konnte nicht verschickt werden. Bitte später erneut versuchen.";
    $offerError.hidden = false;
  } finally {
    btn.disabled = false;
    btn.textContent = label;
  }
});
