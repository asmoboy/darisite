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
const state = { category: "all", query: "", page: 1 };

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
    .sort((a, b) => (state.category === "all" && !q ? b.members - a.members : 0));
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
  const showRank = state.category === "all" && !state.query.trim();

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
