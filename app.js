const CATEGORIES = [
  { id: "all", emoji: "🔥", label: "Angesagt" },
  { id: "business", emoji: "💰", label: "Business" },
  { id: "fitness", emoji: "💪", label: "Fitness" },
  { id: "tech", emoji: "💻", label: "Tech" },
  { id: "kreativ", emoji: "🎨", label: "Kreatives" },
  { id: "musik", emoji: "🎸", label: "Musik" },
  { id: "sprachen", emoji: "🗣️", label: "Sprachen" },
  { id: "gesundheit", emoji: "🌿", label: "Gesundheit" },
  { id: "finanzen", emoji: "📈", label: "Finanzen" },
  { id: "hobby", emoji: "🎲", label: "Hobbys" },
];

// Beispiel-Daten – frei erfunden.
const COMMUNITIES = [
  ["Shopify Starter Club", "business", "🛒", ["#0f766e", "#14b8a6"], "Vom ersten Produkt bis zum ersten 10k-Monat. Wöchentliche Store-Reviews und Live-Calls.", 12400, "49 €/Monat"],
  ["Morgenläufer", "fitness", "🏃", ["#ea580c", "#fbbf24"], "Gemeinsam früh raus. Trainingspläne von 5 km bis Marathon, Check-ins jeden Tag.", 8300, "Kostenlos"],
  ["No-Code Werkstatt", "tech", "🧩", ["#4338ca", "#818cf8"], "Apps und Automationen ohne Programmieren bauen – mit Vorlagen und Sprechstunden.", 5600, "29 €/Monat"],
  ["Aquarell Atelier", "kreativ", "🖌️", ["#be185d", "#f9a8d4"], "Schritt-für-Schritt-Lektionen, monatliche Mal-Challenges und ehrliches Feedback.", 3100, "Kostenlos"],
  ["Gitarre in 90 Tagen", "musik", "🎸", ["#7c2d12", "#f97316"], "Ein klarer Übeplan für Anfänger. Jeden Tag 20 Minuten, am Ende spielst du Songs.", 9800, "19 €/Monat"],
  ["Spanisch Stammtisch", "sprachen", "🇪🇸", ["#b91c1c", "#facc15"], "Sprechen statt pauken: tägliche Konversationsrunden in kleinen Gruppen.", 4700, "Kostenlos"],
  ["Schlaf-Labor", "gesundheit", "🌙", ["#1e3a8a", "#6366f1"], "Evidenzbasierte Routinen für besseren Schlaf. Mit Tracker und 30-Tage-Programm.", 2900, "15 €/Monat"],
  ["ETF Einsteiger", "finanzen", "📈", ["#065f46", "#34d399"], "Vermögensaufbau verständlich erklärt. Keine Tipps, sondern solides Grundwissen.", 21000, "Kostenlos"],
  ["Brettspiel-Designer", "hobby", "🎲", ["#6d28d9", "#c084fc"], "Entwickle dein eigenes Spiel – von der Idee über Prototypen bis zum Playtest.", 1800, "9 €/Monat"],
  ["Agentur Accelerator", "business", "🚀", ["#111827", "#4b5563"], "Kunden gewinnen, Preise erhöhen, Prozesse bauen. Für Agenturen ab 1 Person.", 6200, "99 €/Monat"],
  ["Calisthenics Basics", "fitness", "🤸", ["#0369a1", "#38bdf8"], "Klimmzug, Handstand, Muscle-up: Progressionen ohne Studio, nur mit Körpergewicht.", 15300, "Kostenlos"],
  ["KI für Alltag & Job", "tech", "🤖", ["#0f172a", "#2563eb"], "Praktische Prompts und Workflows, die dir jede Woche Stunden sparen.", 18700, "24 €/Monat"],
  ["Street Photo Walks", "kreativ", "📷", ["#27272a", "#a1a1aa"], "Monatliche Foto-Aufgaben, Bildbesprechungen und Treffen in deiner Stadt.", 3900, "Kostenlos"],
  ["Beat Makers Lounge", "musik", "🎧", ["#581c87", "#ec4899"], "Produzieren in Ableton & FL Studio. Feedback-Runden und Sample-Packs.", 7400, "14 €/Monat"],
  ["Japanisch Dojo", "sprachen", "🗾", ["#9f1239", "#fb7185"], "Hiragana bis JLPT N3 mit Lernpartnern, Karteikarten und Live-Unterricht.", 5100, "19 €/Monat"],
  ["Plant Based Kitchen", "gesundheit", "🥗", ["#3f6212", "#a3e635"], "Einfache pflanzliche Rezepte, Einkaufslisten und Meal-Prep für die Woche.", 11200, "Kostenlos"],
  ["Freelancer Finanzen", "finanzen", "🧾", ["#155e75", "#22d3ee"], "Steuern, Rücklagen, Rechnungen – endlich Ordnung in den Selbstständigen-Finanzen.", 4400, "12 €/Monat"],
  ["Heimwerker Hub", "hobby", "🔨", ["#92400e", "#fbbf24"], "Projekte, Anleitungen und Hilfe, wenn die Wand mal wieder nicht gerade ist.", 6800, "Kostenlos"],
  ["Copywriting Club", "business", "✍️", ["#1f2937", "#f59e0b"], "Texte, die verkaufen. Tägliche Übungen, Swipe-Files und Textkritik.", 5300, "39 €/Monat"],
  ["Yoga am Abend", "fitness", "🧘", ["#7e22ce", "#f0abfc"], "Ruhige 20-Minuten-Sessions zum Runterkommen. Live und als Aufzeichnung.", 9100, "11 €/Monat"],
  ["Webdesign Kollektiv", "tech", "🖥️", ["#1d4ed8", "#a5b4fc"], "Portfolios, Kundenprojekte und Design-Reviews von Leuten aus der Praxis.", 7700, "Kostenlos"],
  ["Töpfer Freunde", "kreativ", "🏺", ["#78350f", "#d6a77a"], "Drehscheibe, Glasuren, Brennen – Tipps von Hobby bis Werkstatt.", 2200, "Kostenlos"],
  ["Klavier für Erwachsene", "musik", "🎹", ["#18181b", "#e4e4e7"], "Nie zu spät: Noten lesen und Lieblingsstücke lernen, im eigenen Tempo.", 6000, "17 €/Monat"],
  ["English Speaking Club", "sprachen", "🇬🇧", ["#1e40af", "#ef4444"], "Selbstbewusst Englisch sprechen – für Meetings, Reisen und Bewerbungen.", 13500, "Kostenlos"],
  ["Mental Fit", "gesundheit", "🧠", ["#0e7490", "#a7f3d0"], "Stress, Fokus, Gewohnheiten: kleine Übungen mit großer Wirkung.", 8900, "9 €/Monat"],
  ["Immobilien Einstieg", "finanzen", "🏠", ["#334155", "#94a3b8"], "Die erste vermietete Wohnung durchrechnen, finanzieren und verwalten.", 7100, "59 €/Monat"],
  ["Angler Treff", "hobby", "🎣", ["#14532d", "#4ade80"], "Spots, Ausrüstung, Fänge. Für Einsteiger und alte Hasen.", 3400, "Kostenlos"],
  ["Content Creator Camp", "business", "🎬", ["#be123c", "#fb923c"], "Wachse auf YouTube & Instagram mit System – Formate, Hooks, Analyse.", 16600, "29 €/Monat"],
  ["Kraftsport Grundlagen", "fitness", "🏋️", ["#44403c", "#f87171"], "Sauber lernen: Kniebeuge, Kreuzheben, Bankdrücken. Mit Videoanalyse.", 10400, "19 €/Monat"],
  ["Python Pausenraum", "tech", "🐍", ["#1e3a8a", "#facc15"], "Coden lernen in kurzen Einheiten, mit Mini-Projekten und Code-Reviews.", 12900, "Kostenlos"],
  ["Illustration Lab", "kreativ", "✏️", ["#9d174d", "#fde68a"], "Digital zeichnen auf dem iPad. Charakter-Design, Farben, eigener Stil.", 4600, "21 €/Monat"],
  ["Chorprobe Online", "musik", "🎤", ["#4c1d95", "#fcd34d"], "Stimmbildung und gemeinsames Singen, jede Woche eine neue Stimme.", 1500, "Kostenlos"],
  ["Französisch Café", "sprachen", "🥐", ["#1e3a8a", "#fca5a5"], "Entspannt Französisch lernen bei virtuellem Kaffee – A1 bis B2.", 3700, "12 €/Monat"],
  ["Rücken Reset", "gesundheit", "🦴", ["#115e59", "#99f6e4"], "Täglich 10 Minuten gegen Schreibtisch-Rücken. Von Physios begleitet.", 6500, "Kostenlos"],
  ["Budget Buddies", "finanzen", "🐷", ["#9f1239", "#fda4af"], "Haushaltsbuch, Sparziele und gegenseitige Motivation zum Schuldenabbau.", 5800, "Kostenlos"],
  ["Pflanzen Dschungel", "hobby", "🪴", ["#166534", "#bef264"], "Zimmerpflanzen retten, vermehren und tauschen. Ohne grünen Daumen.", 8200, "Kostenlos"],
].map(([name, category, emoji, colors, desc, members, price], i) => ({
  id: i + 1, name, category, emoji, colors, desc, members, price,
}));

const PER_PAGE = 9;
const state = { category: "all", query: "", page: 1, sort: "popular", price: "all" };

const $grid = document.getElementById("grid");
const $filters = document.getElementById("filters");
const $pagination = document.getElementById("pagination");
const $empty = document.getElementById("empty");
const $search = document.getElementById("search");

const fmtMembers = (n) =>
  n >= 1000 ? `${(n / 1000).toLocaleString("de-DE", { maximumFractionDigits: 1 })}k` : String(n);

const initials = (name) =>
  name.split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function renderFilters() {
  $filters.innerHTML = CATEGORIES.map(
    (c) => `<button class="pill${c.id === state.category ? " is-active" : ""}" type="button" role="tab"
      aria-selected="${c.id === state.category}" data-cat="${c.id}">
      <span aria-hidden="true">${c.emoji}</span>${c.label}</button>`
  ).join("");
}

function filtered() {
  const q = state.query.trim().toLowerCase();
  return COMMUNITIES
    .filter((c) => state.category === "all" || c.category === state.category)
    .filter((c) => !q || c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q))
    .filter((c) => state.price === "all" || (state.price === "free") === (c.price === "Kostenlos"))
    .sort((a, b) => (state.sort === "name" ? a.name.localeCompare(b.name, "de") : b.members - a.members));
}

function cardHtml(c, rank) {
  const [from, to] = c.colors;
  return `<a class="card" href="#community-${c.id}">
    <div class="card__thumb" style="background:linear-gradient(135deg, ${from}, ${to})">
      ${rank ? `<span class="card__rank">#${rank}</span>` : ""}
      <span class="card__thumb-emoji" aria-hidden="true">${c.emoji}</span>
      <p class="card__thumb-title">${escapeHtml(c.name)}</p>
    </div>
    <div class="card__body">
      <div class="card__head">
        <span class="card__avatar" style="background:${from}">${initials(c.name)}</span>
        <h2 class="card__name">${escapeHtml(c.name)}</h2>
      </div>
      <p class="card__desc">${escapeHtml(c.desc)}</p>
      <p class="card__meta">${fmtMembers(c.members)} Mitglieder<span class="sep">•</span>${c.price}</p>
    </div>
  </a>`;
}

function pageList(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, current - 1, current, current + 1]);
  if (current <= 3) [2, 3, 4].forEach((p) => pages.add(p));
  if (current >= total - 2) [total - 3, total - 2, total - 1].forEach((p) => pages.add(p));
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out = [];
  sorted.forEach((p, i) => {
    if (i && p - sorted[i - 1] > 1) out.push("…");
    out.push(p);
  });
  return out;
}

function renderPagination(total) {
  if (total <= 1) { $pagination.innerHTML = ""; return; }
  const { page } = state;
  $pagination.innerHTML = [
    `<button class="page-btn" type="button" data-page="${page - 1}" ${page === 1 ? "disabled" : ""}>Zurück</button>`,
    ...pageList(page, total).map((p) =>
      p === "…"
        ? `<span class="page-gap">…</span>`
        : `<button class="page-btn${p === page ? " is-current" : ""}" type="button" data-page="${p}"
            ${p === page ? 'aria-current="page"' : ""}>${p}</button>`
    ),
    `<button class="page-btn" type="button" data-page="${page + 1}" ${page === total ? "disabled" : ""}>Weiter</button>`,
  ].join("");
}

function render() {
  const items = filtered();
  const totalPages = Math.max(1, Math.ceil(items.length / PER_PAGE));
  state.page = Math.min(state.page, totalPages);
  const start = (state.page - 1) * PER_PAGE;
  const showRank = state.category === "all" && !state.query.trim() && state.sort === "popular" && state.price === "all";

  $grid.innerHTML = items
    .slice(start, start + PER_PAGE)
    .map((c, i) => cardHtml(c, showRank ? start + i + 1 : 0))
    .join("");
  $empty.hidden = items.length > 0;
  renderPagination(items.length ? totalPages : 0);
}

$filters.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cat]");
  if (!btn) return;
  state.category = btn.dataset.cat;
  state.page = 1;
  renderFilters();
  render();
});

let searchTimer;
$search.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.query = $search.value;
    state.page = 1;
    render();
  }, 120);
});

$pagination.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-page]");
  if (!btn || btn.disabled) return;
  state.page = Number(btn.dataset.page);
  render();
  document.querySelector(".filters").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderFilters();
render();

// ---------- Plan-Anfrage (Zahlungslink per E-Mail) ----------
// Die Anfrage wird über FormSubmit (formsubmit.co) an CONTACT_EMAIL geschickt.
// Gleichzeitig bekommt der Kunde eine automatische Antwort-Mail – mit dem
// Stripe-Zahlungslink, den die Supabase Edge Function "payment-link" erzeugt.
async function sendRequest({ name, email, plan, billing, message = "" }) {
  let link = null;
  try {
    const { data, error } = await sb.functions.invoke("payment-link", {
      body: { plan, billing: billing.startsWith("Jährlich") ? "yearly" : "monthly" },
    });
    if (!error && data?.url) {
      // E-Mail vorausfüllen und Konto-ID mitgeben, damit der Webhook die Zahlung dem Konto zuordnet
      const params = new URLSearchParams({ prefilled_email: email });
      if (me?.id) params.set("client_reference_id", me.id);
      link = `${data.url}?${params}`;
    }
  } catch {}
  const autoresponse = link
    ? `Hallo ${name},\n\ndanke für deine Anfrage! Hier ist dein Zahlungslink für den Plan „${plan}“ (${billing}):\n\n${link}\n\nÜber den Link bezahlst du sicher im Stripe-Checkout. Direkt nach der Zahlung wird dein Plan automatisch freigeschaltet – du siehst ihn in deinem kreisel-Konto mit dieser E-Mail-Adresse.\n\nViele Grüße\ndein kreisel-Team`
    : `Hallo ${name},\n\ndanke für deine Anfrage für den Plan „${plan}“ (${billing}). Wir schicken dir in Kürze deinen persönlichen Stripe-Zahlungslink per E-Mail.\n\nViele Grüße\ndein kreisel-Team`;

  const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `Plan-Anfrage: ${plan} (${billing}) – ${name}`,
      _template: "table",
      _captcha: "false",
      _autoresponse: autoresponse,
      Name: name,
      email,
      Plan: plan,
      Abrechnung: billing,
      Nachricht: message || "–",
      Zahlungslink: link ? `automatisch gesendet: ${link}` : "NICHT automatisch gesendet – bitte manuell schicken",
    }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || String(json.success) !== "true") throw new Error(json.message || "Senden fehlgeschlagen");
  return { link };
}

function mailtoFallback({ name, email, plan, billing, message = "" }) {
  const subject = `Plan-Anfrage: ${plan} (${billing})`;
  const body = [
    "Hallo kreisel-Team,", "",
    `ich möchte den Plan „${plan}“ buchen und bitte um einen Stripe-Zahlungslink.`, "",
    `Name: ${name}`, `E-Mail: ${email}`, `Plan: ${plan}`, `Abrechnung: ${billing}`,
    message ? `\nZu meiner Community:\n${message}` : "",
  ].join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.querySelectorAll("form[data-request]").forEach((form) => {
  const $error = form.querySelector(".request__error");
  const $submit = form.querySelector('[type="submit"]');
  const $success = form.parentElement.querySelector(".request__success");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(form));
    const data = {
      name: (raw.name || "").trim(),
      email: (raw.email || "").trim(),
      plan: raw.plan,
      billing: raw.billing,
      message: (raw.message || "").trim(),
    };

    if (!data.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      $error.textContent = "Bitte gib deinen Namen und eine gültige E-Mail-Adresse an.";
      $error.hidden = false;
      return;
    }
    $error.hidden = true;
    const label = $submit.textContent;
    $submit.disabled = true;
    $submit.textContent = "Wird gesendet…";

    try {
      const { link } = await sendRequest(data);
      form.hidden = true;
      $success.hidden = false;
      $success.innerHTML = `
        <div class="request__check" aria-hidden="true">✓</div>
        <h3>Anfrage gesendet!</h3>
        <p>Wir haben eine E-Mail an <strong>${escapeHtml(data.email)}</strong> geschickt${link
          ? " – darin findest du deinen Stripe-Zahlungslink für den Plan „" + escapeHtml(data.plan) + "“."
          : ". Deinen persönlichen Stripe-Zahlungslink bekommst du in Kürze."}</p>
        <p class="request__small">Keine E-Mail da? Schau bitte auch im Spam-Ordner nach.</p>
        <button class="btn-ghost" type="button" data-request-again>Weitere Anfrage senden</button>`;
    } catch {
      $error.innerHTML = `Die Anfrage konnte gerade nicht gesendet werden. <a href="${mailtoFallback(data)}">Hier klicken, um sie per E-Mail zu schicken</a>.`;
      $error.hidden = false;
    } finally {
      $submit.disabled = false;
      $submit.textContent = label;
    }
  });

  $success.addEventListener("click", (e) => {
    if (!e.target.closest("[data-request-again]")) return;
    form.reset();
    form.hidden = false;
    $success.hidden = true;
  });
});

// Preis-Buttons öffnen das Anfrage-Fenster für den jeweiligen Plan
const $planDialog = document.getElementById("plan-dialog");
const $planForm = $planDialog.querySelector("form[data-request]");

document.querySelectorAll("[data-plan]").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const plan = btn.dataset.plan;
    const card = btn.closest(".plan");
    const price = card.querySelector(".plan__amount").textContent + card.querySelector(".plan__period").textContent;
    $planForm.reset();
    $planForm.hidden = false;
    $planDialog.querySelector(".request__success").hidden = true;
    $planForm.querySelector(".request__error").hidden = true;
    $planForm.elements.plan.value = plan;
    document.getElementById("plan-eyebrow").textContent = `${plan} · ${price}`;
    const user = typeof currentUser === "function" ? currentUser() : null;
    if (user) {
      $planForm.elements.name.value = user.name;
      $planForm.elements.email.value = user.email;
    }
    $planDialog.showModal();
  })
);

// ---------- Hilfen ----------
const byId = (id) => COMMUNITIES.find((c) => c.id === id);
const CAT_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, `${c.emoji} ${c.label}`]));

// ---------- Menüs (Popover) ----------
document.querySelectorAll(".menu[popover]").forEach((menu) => {
  menu.addEventListener("toggle", (e) => {
    if (e.newState !== "open") return;
    const anchor = document.querySelector(`[popovertarget="${menu.id}"]:not([hidden])`);
    if (!anchor) return;
    const r = anchor.getBoundingClientRect();
    const w = menu.offsetWidth;
    menu.style.top = `${r.bottom + 8}px`;
    menu.style.left = `${Math.min(Math.max(8, r.right - w), innerWidth - w - 8)}px`;
  });
});
const closeMenus = () => document.querySelectorAll(".menu[popover]").forEach((m) => {
  try { m.hidePopover(); } catch {}
});
window.addEventListener("scroll", closeMenus, { passive: true });
window.addEventListener("resize", closeMenus);

// ---------- Logo = Startseite ----------
document.querySelectorAll('.brand[href="index.html"]').forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    Object.assign(state, { category: "all", query: "", page: 1, sort: "popular", price: "all" });
    $search.value = "";
    syncFilterMenu();
    renderFilters();
    render();
    history.replaceState(null, "", location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  })
);

// ---------- Kategorien "Mehr…" ----------
const $moreMenu = document.getElementById("more-menu");
$moreMenu.innerHTML = `<p class="menu__label">Alle Kategorien</p>` + CATEGORIES.map((c) => {
  const n = c.id === "all" ? COMMUNITIES.length : COMMUNITIES.filter((x) => x.category === c.id).length;
  return `<button class="menu__item" type="button" data-cat="${c.id}"><span>${c.emoji} ${c.label}</span><span class="menu__num">${n}</span></button>`;
}).join("");
$moreMenu.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cat]");
  if (!btn) return;
  state.category = btn.dataset.cat;
  state.page = 1;
  $moreMenu.hidePopover();
  renderFilters();
  render();
  $filters.querySelector(".is-active")?.scrollIntoView({ block: "nearest", inline: "center" });
});

// ---------- Filter & Sortierung ----------
const $filterMenu = document.getElementById("filter-menu");
const $filterCount = document.getElementById("filter-count");

function syncFilterMenu() {
  $filterMenu.querySelector(`[name="sort"][value="${state.sort}"]`).checked = true;
  $filterMenu.querySelector(`[name="price"][value="${state.price}"]`).checked = true;
  const active = Number(state.sort !== "popular") + Number(state.price !== "all");
  $filterCount.textContent = active;
  $filterCount.hidden = !active;
}

$filterMenu.addEventListener("change", (e) => {
  if (e.target.name !== "sort" && e.target.name !== "price") return;
  state[e.target.name] = e.target.value;
  state.page = 1;
  syncFilterMenu();
  render();
});
document.getElementById("filter-reset").addEventListener("click", () => {
  Object.assign(state, { sort: "popular", price: "all", page: 1 });
  syncFilterMenu();
  render();
});

// ---------- Konten (Supabase) ----------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sb = window.supabase && SUPABASE_URL && SUPABASE_ANON_KEY
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

const $authDialog = document.getElementById("auth-dialog");
const $authForm = document.getElementById("auth-form");
const $authError = document.getElementById("auth-error");
const $authInfo = document.getElementById("auth-info");
const $authSubmit = document.getElementById("auth-submit");
let authMode = "login";
let pendingJoin = null;
let me = null; // { id, name, email, joined: [communityId, …] }

const currentUser = () => me;
const redirectUrl = () => location.origin + location.pathname;

const AUTH_TEXT = {
  login:    { title: "Willkommen zurück", sub: "Melde dich bei kreisel an.", submit: "Anmelden" },
  register: { title: "Konto erstellen", sub: "Kostenlos registrieren und Communities beitreten.", submit: "Konto erstellen" },
  reset:    { title: "Passwort vergessen", sub: "Wir schicken dir einen Link zum Zurücksetzen.", submit: "Link senden" },
  newpw:    { title: "Neues Passwort", sub: "Lege ein neues Passwort für dein Konto fest.", submit: "Passwort speichern" },
};

function setAuthMode(mode, note) {
  authMode = mode;
  const t = AUTH_TEXT[mode];
  $authDialog.querySelectorAll("[data-mode]").forEach((b) => b.classList.toggle("is-active", b.dataset.mode === mode));
  $authDialog.querySelector(".tabs").hidden = mode === "reset" || mode === "newpw";
  document.getElementById("auth-name-field").hidden = mode !== "register";
  document.getElementById("auth-email-field").hidden = mode === "newpw";
  document.getElementById("auth-pw-field").hidden = mode === "reset";
  document.getElementById("auth-pw-hint").hidden = mode === "login";
  document.getElementById("auth-forgot").hidden = mode !== "login";
  document.getElementById("auth-back").hidden = mode !== "reset";
  document.getElementById("au-pw").autocomplete = mode === "login" ? "current-password" : "new-password";
  document.getElementById("auth-title").textContent = t.title;
  document.getElementById("auth-sub").textContent = note || t.sub;
  $authSubmit.textContent = t.submit;
  $authForm.hidden = false;
  $authError.hidden = true;
  $authInfo.hidden = true;
}

function openAuth(mode = "login", note) {
  $authForm.reset();
  setAuthMode(mode, note);
  if (!$authDialog.open) $authDialog.showModal();
}

function authErrorText(err) {
  const m = (err?.message || "").toLowerCase();
  if (m.includes("invalid login")) return "E-Mail-Adresse oder Passwort ist falsch.";
  if (m.includes("not confirmed")) return "Bitte bestätige zuerst deine E-Mail-Adresse über den Link in unserer E-Mail.";
  if (m.includes("already registered")) return "Mit dieser E-Mail gibt es schon ein Konto. Melde dich an.";
  if (err?.status === 429 || m.includes("rate limit")) return "Zu viele Versuche. Bitte warte kurz und versuch es dann erneut.";
  if (m.includes("password")) return "Das Passwort ist zu schwach. Bitte wähle ein längeres Passwort.";
  return "Das hat leider nicht geklappt. Bitte versuch es erneut.";
}

document.getElementById("login-btn").addEventListener("click", () => openAuth("login"));
$authDialog.querySelectorAll("[data-mode]").forEach((b) =>
  b.addEventListener("click", () => setAuthMode(b.dataset.mode))
);
document.getElementById("auth-forgot").addEventListener("click", () => setAuthMode("reset"));
document.getElementById("auth-back").addEventListener("click", () => setAuthMode("login"));

$authForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData($authForm));
  const email = (data.email || "").trim().toLowerCase();
  const name = (data.name || "").trim();
  const password = data.password || "";
  const fail = (msg) => { $authError.textContent = msg; $authError.hidden = false; };
  const info = (msg) => { $authForm.hidden = true; $authInfo.textContent = msg; $authInfo.hidden = false; };

  if (!sb) return fail("Konten sind gerade nicht verfügbar. Bitte versuch es später erneut.");
  if (authMode !== "newpw" && !EMAIL_RE.test(email)) return fail("Bitte gib eine gültige E-Mail-Adresse an.");
  if (authMode === "register" && !name) return fail("Bitte gib deinen Namen an.");
  if ((authMode === "register" || authMode === "newpw") && password.length < 8) {
    return fail("Das Passwort muss mindestens 8 Zeichen lang sein.");
  }
  if (authMode === "login" && !password) return fail("Bitte gib dein Passwort ein.");

  $authError.hidden = true;
  $authSubmit.disabled = true;
  $authSubmit.textContent = "Einen Moment…";

  try {
    if (authMode === "login") {
      const { data: res, error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
      await afterLogin(res.session);
    } else if (authMode === "register") {
      const { data: res, error } = await sb.auth.signUp({
        email, password, options: { data: { name }, emailRedirectTo: redirectUrl() },
      });
      if (error) throw error;
      if (res.user && res.user.identities?.length === 0) throw new Error("already registered");
      if (res.session) await afterLogin(res.session);
      else info(`Fast geschafft! Wir haben dir eine E-Mail an ${email} geschickt. Klicke auf den Link darin, um dein Konto zu bestätigen.`);
    } else if (authMode === "reset") {
      const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: redirectUrl() });
      if (error) throw error;
      info(`Falls es ein Konto zu ${email} gibt, haben wir dir einen Link zum Zurücksetzen geschickt.`);
    } else {
      const { error } = await sb.auth.updateUser({ password });
      if (error) throw error;
      info("Dein neues Passwort ist gespeichert. Du bist angemeldet.");
    }
  } catch (err) {
    fail(authErrorText(err));
  } finally {
    $authSubmit.disabled = false;
    $authSubmit.textContent = AUTH_TEXT[authMode].submit;
  }
});
$authDialog.addEventListener("close", () => { pendingJoin = null; });

async function afterLogin(session) {
  const joinId = pendingJoin;
  $authDialog.close();
  await loadMe(session);
  if (joinId && me) {
    try { await setMembership(joinId, true); } catch {}
    openCommunity(joinId);
  }
}

async function loadMe(session) {
  const user = session?.user;
  if (!user) {
    me = null;
  } else {
    const [memberships, subscriptions] = await Promise.all([
      sb.from("memberships").select("community_id").eq("user_id", user.id),
      sb.from("subscriptions")
        .select("plan, billing, status, cancel_at_period_end, current_period_end")
        .order("updated_at", { ascending: false }),
    ]);
    const subs = subscriptions.data ?? [];
    me = {
      id: user.id,
      email: user.email,
      name: user.user_metadata?.name || user.email.split("@")[0],
      joined: memberships.error ? [] : memberships.data.map((r) => r.community_id),
      subscription: subs.find((s) => ACTIVE_STATUSES.includes(s.status)) ?? subs[0] ?? null,
    };
  }
  renderAccount();
  if ($communityDialog.open && openCommunityId) renderCommunity(byId(openCommunityId));
}

async function setMembership(id, join) {
  const { error } = join
    ? await sb.from("memberships").upsert(
        { user_id: me.id, community_id: id },
        { onConflict: "user_id,community_id", ignoreDuplicates: true }
      )
    : await sb.from("memberships").delete().eq("user_id", me.id).eq("community_id", id);
  if (error) throw error;
  me.joined = join ? [...new Set([...me.joined, id])] : me.joined.filter((x) => x !== id);
  renderAccount();
}

if (sb) {
  sb.auth.onAuthStateChange((event, session) => {
    // Supabase-Aufrufe nicht direkt im Callback ausführen (sonst Deadlock)
    setTimeout(() => {
      loadMe(session);
      if (event === "PASSWORD_RECOVERY") openAuth("newpw");
    }, 0);
  });
}

const ACTIVE_STATUSES = ["active", "trialing"];

function planStatusHtml(sub) {
  const date = (iso) => new Date(iso).toLocaleDateString("de-DE");
  if (!sub) {
    return `<span class="menu__plan-text">Noch kein Plan gebucht</span><a class="menu__plan-link" href="#preise">Plan wählen</a>`;
  }
  const badge = `<span class="plan-badge">${escapeHtml(sub.plan)}</span>`;
  if (ACTIVE_STATUSES.includes(sub.status)) {
    const until = sub.current_period_end
      ? ` · ${sub.cancel_at_period_end ? "endet" : "verlängert sich"} am ${date(sub.current_period_end)}`
      : "";
    return `${badge}<span class="menu__plan-text"><span class="plan-dot"></span>Aktiv${until}</span>`;
  }
  if (sub.status === "past_due" || sub.status === "unpaid" || sub.status === "incomplete") {
    return `${badge}<span class="menu__plan-text menu__plan-text--warn">Zahlung offen</span>`;
  }
  return `${badge}<span class="menu__plan-text">Beendet</span><a class="menu__plan-link" href="#preise">Neu buchen</a>`;
}

const $accountBtn = document.getElementById("account-btn");
const $accountMenu = document.getElementById("account-menu");

function renderAccount() {
  document.getElementById("login-btn").hidden = !!me;
  $accountBtn.hidden = !me;
  if (!me) return;
  $accountBtn.textContent = initials(me.name);
  document.getElementById("account-name").textContent = me.name;
  document.getElementById("account-email").textContent = me.email;
  document.getElementById("account-plan").innerHTML = planStatusHtml(me.subscription);
  document.getElementById("account-joined").innerHTML = me.joined.length
    ? me.joined.map(byId).filter(Boolean).map((c) =>
        `<a class="menu__item" href="#community-${c.id}"><span>${c.emoji} ${escapeHtml(c.name)}</span></a>`).join("")
    : `<p class="menu__empty">Noch keiner Community beigetreten.</p>`;
}

$accountMenu.addEventListener("click", (e) => {
  if (e.target.closest("a")) $accountMenu.hidePopover();
});
document.getElementById("logout-btn").addEventListener("click", async () => {
  $accountMenu.hidePopover();
  await sb?.auth.signOut();
  me = null;
  renderAccount();
});

// ---------- Community-Details ----------
const $communityDialog = document.getElementById("community-dialog");
const $communityBody = document.getElementById("community-body");
let openCommunityId = null;

function renderCommunity(c) {
  const joined = me?.joined.includes(c.id);
  const free = c.price === "Kostenlos";
  const [from, to] = c.colors;
  $communityBody.innerHTML = `
    <div class="card__thumb community__thumb" style="background:linear-gradient(135deg, ${from}, ${to})">
      <span class="card__thumb-emoji" aria-hidden="true">${c.emoji}</span>
      <p class="card__thumb-title">${escapeHtml(c.name)}</p>
    </div>
    <div class="community__body">
      <div class="community__head">
        <span class="card__avatar" style="background:${from}">${initials(c.name)}</span>
        <div>
          <h2 class="community__name">${escapeHtml(c.name)}</h2>
          <p class="community__meta">${CAT_LABEL[c.category]} · ${c.members.toLocaleString("de-DE")} Mitglieder · ${c.price}</p>
        </div>
      </div>
      <p class="community__desc">${escapeHtml(c.desc)}</p>
      <ul class="plan__features">
        <li>Feed mit Diskussionen und Fragen</li>
        <li>Kalender mit Live-Calls</li>
        <li>${free ? "Kostenloser Zugang" : `Mitgliedschaft ${c.price}, monatlich kündbar`}</li>
      </ul>
      ${joined
        ? `<p class="community__joined">✓ Du bist Mitglied dieser Community</p>
           <button class="btn-ghost" type="button" data-leave="${c.id}">Community verlassen</button>`
        : `<button class="request__submit" type="button" data-join="${c.id}">${free ? "Kostenlos beitreten" : `Beitreten · ${c.price}`}</button>
           ${me ? "" : `<p class="dialog__note">Zum Beitreten brauchst du ein kostenloses kreisel-Konto.</p>`}`}
    </div>`;
}

function openCommunity(id) {
  const c = byId(id);
  if (!c) return;
  openCommunityId = id;
  renderCommunity(c);
  if (!$communityDialog.open) $communityDialog.showModal();
}

$communityBody.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-join], [data-leave]");
  if (!btn) return;
  const id = Number(btn.dataset.join || btn.dataset.leave);
  if (!me) {
    $communityDialog.close();
    openAuth("register", "Erstelle ein kostenloses Konto, um beizutreten.");
    pendingJoin = id;
    return;
  }
  btn.disabled = true;
  try {
    await setMembership(id, !!btn.dataset.join);
    renderCommunity(byId(id));
  } catch {
    btn.disabled = false;
    btn.textContent = "Fehler – bitte erneut versuchen";
  }
});

$communityDialog.addEventListener("close", () => {
  openCommunityId = null;
  if (location.hash.startsWith("#community-")) history.replaceState(null, "", location.pathname + location.search);
});

function openFromHash() {
  const m = location.hash.match(/^#community-(\d+)$/);
  if (m) openCommunity(Number(m[1]));
}
window.addEventListener("hashchange", openFromHash);

// Klick auf den abgedunkelten Hintergrund schließt Dialoge
document.querySelectorAll("dialog").forEach((d) =>
  d.addEventListener("click", (e) => {
    if (e.target !== d) return;
    const r = d.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) d.close();
  })
);

renderAccount();
openFromHash();
