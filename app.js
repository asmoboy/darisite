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

const byId = (id) => COMMUNITIES.find((c) => c.id === id);
const catLabel = (id) => {
  const c = CATEGORIES.find((x) => x.id === id);
  return `${c.emoji} ${t(`cat.${id}`)}`;
};
const priceLabel = (price) =>
  price === "Kostenlos" ? t("price.free") : price.replace("/Monat", `/${t("price.month")}`);

function renderFilters() {
  $filters.innerHTML = CATEGORIES.map(
    (c) => `<button class="pill${c.id === state.category ? " is-active" : ""}" type="button" role="tab"
      aria-selected="${c.id === state.category}" data-cat="${c.id}">
      <span aria-hidden="true">${c.emoji}</span>${t(`cat.${c.id}`)}</button>`
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
      <p class="card__meta">${fmtMembers(c.members)} ${t("card.members")}<span class="sep">•</span>${priceLabel(c.price)}</p>
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
    `<button class="page-btn" type="button" data-page="${page - 1}" ${page === 1 ? "disabled" : ""}>${t("page.prev")}</button>`,
    ...pageList(page, total).map((p) =>
      p === "…"
        ? `<span class="page-gap">…</span>`
        : `<button class="page-btn${p === page ? " is-current" : ""}" type="button" data-page="${p}"
            ${p === page ? 'aria-current="page"' : ""}>${p}</button>`
    ),
    `<button class="page-btn" type="button" data-page="${page + 1}" ${page === total ? "disabled" : ""}>${t("page.next")}</button>`,
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

// ---------- Anfragen (Plan & individuelles Service-Paket) ----------
// Die Supabase Edge Function "payment-link" erstellt den Stripe-Zahlungslink und
// schickt ihn per E-Mail an den Kunden (und eine Benachrichtigung an CONTACT_EMAIL).
async function sendRequest(payload) {
  if (!sb) throw new Error("Supabase nicht verfügbar");
  const { data, error } = await sb.functions.invoke("payment-link", { body: payload });
  if (error || !data?.sent) throw error || new Error("Senden fehlgeschlagen");
  return { order: data.order, quoteOnly: payload.kind === "service" };
}

function mailtoFallback(data) {
  const lines = data.kind === "service"
    ? [`Leistungen: ${data.services.join(", ")}`, `Budget: ${data.budget}`]
    : [`Plan: ${data.plan}`, `Laufzeit: ${data.billing === "yearly" ? "12 Monate" : "1 Monat"}`];
  const subject = data.kind === "service" ? "Anfrage: Individuelles Service-Paket" : `Plan-Anfrage: ${data.plan}`;
  const body = [
    `Name: ${data.name}`, `E-Mail: ${data.email}`, ...lines,
    data.message ? `\n${data.message}` : "",
  ].join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.querySelectorAll("form[data-request]").forEach((form) => {
  const $error = form.querySelector(".request__error");
  const $submit = form.querySelector('[type="submit"]');
  const $success = form.parentElement.querySelector(".request__success");
  const isService = form.dataset.kind === "service";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const data = {
      kind: isService ? "service" : "plan",
      name: (fd.get("name") || "").trim(),
      email: (fd.get("email") || "").trim(),
      message: (fd.get("message") || "").trim(),
    };
    if (isService) {
      data.services = fd.getAll("services");
      data.budget = fd.get("budget");
    } else {
      data.plan = fd.get("plan");
      data.billing = fd.get("billing");
    }

    if (!data.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      $error.textContent = t("req.err.fields");
      $error.hidden = false;
      return;
    }
    if (isService && !data.services.length) {
      $error.textContent = t("dlg.service.err");
      $error.hidden = false;
      return;
    }
    $error.hidden = true;
    const label = $submit.textContent;
    $submit.disabled = true;
    $submit.textContent = t("req.sending");

    try {
      const { order, quoteOnly } = await sendRequest(data);
      form.hidden = true;
      $success.hidden = false;
      $success.innerHTML = `
        <div class="request__check" aria-hidden="true">✓</div>
        <h3>${t("req.ok.title")}</h3>
        <p>${t("req.ok.sent")} <strong>${escapeHtml(data.email)}</strong> ${quoteOnly ? t("req.ok.quote") : t("req.ok.link")}</p>
        ${order ? `<p class="request__order">${t("req.ok.order")} <strong>${escapeHtml(order)}</strong></p>` : ""}
        <p class="request__small">${t("req.ok.spam")}</p>
        <button class="btn-ghost" type="button" data-request-again>${t("req.ok.again")}</button>`;
    } catch {
      $error.innerHTML = `${t("req.err.send")} <a href="${mailtoFallback(data)}">${t("req.err.mailto")}</a>.`;
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

function resetRequestDialog(dialog) {
  const form = dialog.querySelector("form[data-request]");
  form.reset();
  form.hidden = false;
  form.querySelector(".request__error").hidden = true;
  dialog.querySelector(".request__success").hidden = true;
  if (me) {
    form.elements.name.value = me.name;
    form.elements.email.value = me.email;
  }
  return form;
}

document.querySelectorAll("[data-plan]").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const card = btn.closest(".plan");
    const price = card.querySelector(".plan__amount").textContent + card.querySelector(".plan__period").textContent;
    const form = resetRequestDialog($planDialog);
    form.elements.plan.value = btn.dataset.plan;
    document.getElementById("plan-eyebrow").textContent = `${btn.dataset.plan} · ${price}`;
    $planDialog.showModal();
  })
);

const $serviceDialog = document.getElementById("service-dialog");
document.getElementById("package-btn").addEventListener("click", () => {
  resetRequestDialog($serviceDialog);
  $serviceDialog.showModal();
});

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

function renderMoreMenu() {
  $moreMenu.innerHTML = `<p class="menu__label">${t("filters.all")}</p>` + CATEGORIES.map((c) => {
    const n = c.id === "all" ? COMMUNITIES.length : COMMUNITIES.filter((x) => x.category === c.id).length;
    return `<button class="menu__item" type="button" data-cat="${c.id}"><span>${c.emoji} ${t(`cat.${c.id}`)}</span><span class="menu__num">${n}</span></button>`;
  }).join("");
}

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

function setAuthMode(mode, note) {
  authMode = mode;
  $authDialog.querySelectorAll("[data-mode]").forEach((b) => b.classList.toggle("is-active", b.dataset.mode === mode));
  $authDialog.querySelector(".tabs").hidden = mode === "reset" || mode === "newpw";
  document.getElementById("auth-name-field").hidden = mode !== "register";
  document.getElementById("auth-email-field").hidden = mode === "newpw";
  document.getElementById("auth-pw-field").hidden = mode === "reset";
  document.getElementById("auth-pw-hint").hidden = mode === "login";
  document.getElementById("auth-forgot").hidden = mode !== "login";
  document.getElementById("auth-back").hidden = mode !== "reset";
  document.getElementById("au-pw").autocomplete = mode === "login" ? "current-password" : "new-password";
  document.getElementById("auth-title").textContent = t(`auth.${mode}.title`);
  document.getElementById("auth-sub").textContent = note || t(`auth.${mode}.sub`);
  $authSubmit.textContent = t(`auth.${mode}.submit`);
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
  if (m.includes("invalid login")) return t("auth.err.credentials");
  if (m.includes("not confirmed")) return t("auth.err.confirm");
  if (m.includes("already registered")) return t("auth.err.exists");
  if (err?.status === 429 || m.includes("rate limit")) return t("auth.err.rate");
  if (m.includes("password")) return t("auth.err.weak");
  return t("auth.err.generic");
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

  if (!sb) return fail(t("auth.err.off"));
  if (authMode !== "newpw" && !EMAIL_RE.test(email)) return fail(t("auth.err.email"));
  if (authMode === "register" && !name) return fail(t("auth.err.name"));
  if ((authMode === "register" || authMode === "newpw") && password.length < 8) return fail(t("auth.err.pw"));
  if (authMode === "login" && !password) return fail(t("auth.err.pwEmpty"));

  $authError.hidden = true;
  $authSubmit.disabled = true;
  $authSubmit.textContent = t("auth.wait");

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
      else info(t("auth.info.confirm"));
    } else if (authMode === "reset") {
      const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: redirectUrl() });
      if (error) throw error;
      info(t("auth.info.reset"));
    } else {
      const { error } = await sb.auth.updateUser({ password });
      if (error) throw error;
      info(t("auth.info.newpw"));
    }
  } catch (err) {
    fail(authErrorText(err));
  } finally {
    $authSubmit.disabled = false;
    $authSubmit.textContent = t(`auth.${authMode}.submit`);
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
    const { data, error } = await sb.from("memberships").select("community_id").eq("user_id", user.id);
    me = {
      id: user.id,
      email: user.email,
      name: user.user_metadata?.name || user.email.split("@")[0],
      joined: error ? [] : data.map((r) => r.community_id),
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

const $accountBtn = document.getElementById("account-btn");
const $accountMenu = document.getElementById("account-menu");

function renderAccount() {
  document.getElementById("login-btn").hidden = !!me;
  $accountBtn.hidden = !me;
  if (!me) return;
  $accountBtn.textContent = initials(me.name);
  document.getElementById("account-name").textContent = me.name;
  document.getElementById("account-email").textContent = me.email;
  document.getElementById("account-joined").innerHTML = me.joined.length
    ? me.joined.map(byId).filter(Boolean).map((c) =>
        `<a class="menu__item" href="#community-${c.id}"><span>${c.emoji} ${escapeHtml(c.name)}</span></a>`).join("")
    : `<p class="menu__empty">${t("acc.none")}</p>`;
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
          <p class="community__meta">${catLabel(c.category)} · ${c.members.toLocaleString("de-DE")} ${t("card.members")} · ${priceLabel(c.price)}</p>
        </div>
      </div>
      <p class="community__desc">${escapeHtml(c.desc)}</p>
      <ul class="plan__features">
        <li>${t("com.f1")}</li>
        <li>${t("com.f2")}</li>
        <li>${free ? t("com.free") : `${t("com.paid")} ${priceLabel(c.price)}`}</li>
      </ul>
      ${joined
        ? `<p class="community__joined">${t("com.member")}</p>
           <button class="btn-ghost" type="button" data-leave="${c.id}">${t("com.leave")}</button>`
        : `<button class="request__submit" type="button" data-join="${c.id}">${free ? t("com.join") : `${t("com.joinPaid")} · ${priceLabel(c.price)}`}</button>
           ${me ? "" : `<p class="dialog__note">${t("com.needAccount")}</p>`}`}
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
    openAuth("register", t("com.authNote"));
    pendingJoin = id;
    return;
  }
  btn.disabled = true;
  try {
    await setMembership(id, !!btn.dataset.join);
    renderCommunity(byId(id));
  } catch {
    btn.disabled = false;
    btn.textContent = t("com.error");
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

// Sprachwechsel: dynamische Teile neu aufbauen
document.addEventListener("langchange", () => {
  renderFilters();
  render();
  renderMoreMenu();
  renderAccount();
  if ($authDialog.open) setAuthMode(authMode);
  if ($communityDialog.open && openCommunityId) renderCommunity(byId(openCommunityId));
});

renderFilters();
renderMoreMenu();
syncFilterMenu();
render();
renderAccount();
openFromHash();
