---
banner: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600&q=80"
banner_y: 0.4
cssclasses:
  - home
tipo: home
tags:
  - home
---

# 🧠 Segundo Cérebro

<div class="dashboard-row">

<div class="dashboard-col">
<div class="dash-section-title">⚡ Ações rápidas</div>
<div class="quick-actions">
  <a href="obsidian://daily">📅 Diário de hoje</a>
  <a href="obsidian://search?vault=startup_obsidian_vault">🔍 Buscar <span class="qa-kbd">Ctrl+Shift+F</span></a>
  <a href="[[Ritual Diário]]">🔄 Ritual diário</a>
  <a href="[[README]]">📖 README</a>
</div>
</div>

<div class="dashboard-col">
<div class="dash-section-title">➕ Criar nova nota</div>
<div class="quick-actions">
  <a class="create-btn" href="obsidian://new?vault=startup_obsidian_vault&file=01%20-%20Caixa%20de%20Entrada%2FNova%20Nota&template=99%20-%20Suporte%2Ftemplates%2Fnote_template">📥 Nota rápida</a>
  <a class="create-btn" href="obsidian://new?vault=startup_obsidian_vault&file=03%20-%20Permanentes%2FNova%20Permanente&template=99%20-%20Suporte%2Ftemplates%2Fpermanente_template">🧠 Permanente</a>
  <a class="create-btn" href="obsidian://new?vault=startup_obsidian_vault&file=04%20-%20Flashcards%2FNovo%20Flashcard&template=99%20-%20Suporte%2Ftemplates%2Fflashcard_template">🃏 Flashcard</a>
  <a class="create-btn" href="obsidian://new?vault=startup_obsidian_vault&file=02%20-%20Refer%C3%AAncias%2FNova%20Refer%C3%AAncia&template=99%20-%20Suporte%2Ftemplates%2Freferencia_template">📚 Referência</a>
  <a class="create-btn" href="obsidian://new?vault=startup_obsidian_vault&file=05%20-%20Mapas%2FNovo%20Mapa&template=99%20-%20Suporte%2Ftemplates%2Fmoc_template">🗺️ Mapa</a>
  <a class="create-btn" href="obsidian://new?vault=startup_obsidian_vault&file=06%20-%20Revis%C3%A3o%2FNova%20Revis%C3%A3o&template=99%20-%20Suporte%2Ftemplates%2Frevisao_template">🔁 Revisão</a>
</div>
</div>

</div>

---

```dataviewjs
const folders = {
  "Permanentes": "03 - Permanentes",
  "Flashcards":  "04 - Flashcards",
  "Referências": "02 - Referências",
  "Mapas":       "05 - Mapas",
};
const counts = {};
for (const [label, folder] of Object.entries(folders)) {
  counts[label] = dv.pages(`"${folder}"`).where(p => p.file.name != "empty").length;
}
const inbox   = dv.pages('"01 - Caixa de Entrada"').where(p => p.file.name != "empty").length;
const today   = dv.date("today");
const due     = dv.pages('"04 - Flashcards"').where(p => p.proxima_revisao && dv.date(p.proxima_revisao) <= today).length;
const revisao = dv.pages('"06 - Revisão"').where(p => p.proxima_revisao && dv.date(p.proxima_revisao) <= today).length;
const total   = Object.values(counts).reduce((a,b)=>a+b,0) + inbox;

const cards = [
  { value: total,              label: "Total de notas",    sub: "no vault" },
  { value: counts.Permanentes, label: "Permanentes",       sub: "notas atômicas" },
  { value: due + revisao,      label: "Para revisar hoje", sub: `${due} cards · ${revisao} revisões` },
  { value: inbox,              label: "Inbox",             sub: "aguardando processo" },
];

const row = dv.container.createEl("div", { cls: "metric-row" });
for (const c of cards) {
  const card = row.createEl("div", { cls: "metric-card" });
  card.createEl("div", { cls: "m-value", text: String(c.value) });
  card.createEl("div", { cls: "m-label", text: c.label });
  card.createEl("div", { cls: "m-sub",   text: c.sub });
}
```

---

<div class="dashboard-row charts-left">

<div class="dashboard-col">

<div class="dash-section-title">📊 Distribuição do vault</div>

```dataviewjs
const sections = [
  { label: "Permanentes", folder: "03 - Permanentes",     color: "var(--color-green)"  },
  { label: "Flashcards",  folder: "04 - Flashcards",      color: "var(--color-blue)"   },
  { label: "Referências", folder: "02 - Referências",     color: "var(--color-purple)" },
  { label: "Mapas",       folder: "05 - Mapas",           color: "var(--color-yellow)" },
  { label: "Revisão",     folder: "06 - Revisão",         color: "var(--color-orange)" },
  { label: "Inbox",       folder: "01 - Caixa de Entrada",color: "var(--color-red)"    },
];
const data = sections.map(s => ({
  ...s,
  count: dv.pages(`"${s.folder}"`).where(p => p.file.name != "empty").length
}));
const max  = Math.max(...data.map(d => d.count), 1);
const wrap = dv.container.createEl("div");
for (const d of data) {
  const row   = wrap.createEl("div", { cls: "chart-bar-row" });
  row.createEl("div", { cls: "chart-bar-label", text: d.label });
  const track = row.createEl("div", { cls: "chart-bar-track" });
  const fill  = track.createEl("div", { cls: "chart-bar-fill" });
  fill.style.width      = `${Math.round((d.count / max) * 100)}%`;
  fill.style.background = d.color;
  row.createEl("div", { cls: "chart-bar-count", text: String(d.count) });
}
```

```dataviewjs
const allCards  = dv.pages('"04 - Flashcards"').where(p => p.file.name != "empty");
const today     = dv.date("today");
const total     = allCards.length;
const vencidos  = allCards.where(p => p.proxima_revisao && dv.date(p.proxima_revisao) <= today).length;
const novas     = allCards.where(p => p.dificuldade === "nova").length;
const dominados = allCards.where(p => p.intervalo_dias && p.intervalo_dias >= 16).length;
const revision  = dv.pages('"06 - Revisão"').where(p => p.file.name != "empty").length;

function ring(label, value, max, color) {
  const pct  = max > 0 ? Math.round((value / max) * 100) : 0;
  const r = 28, cx = 34, cy = 34, stroke = 5;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return `<div class="ring-item">
    <svg width="68" height="68" viewBox="0 0 68 68">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--background-modifier-border)" stroke-width="${stroke}"/>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}"
        stroke-dasharray="${dash} ${circ}" stroke-dashoffset="${circ/4}" stroke-linecap="round" transform="rotate(-90 ${cx} ${cy})"/>
      <text x="${cx}" y="${cy+5}" text-anchor="middle" font-size="13" font-weight="700" fill="var(--text-normal)">${value}</text>
    </svg>
    <div class="ring-value">${pct}%</div>
    <div class="ring-label">${label}</div>
  </div>`;
}

const wrap = dv.container.createEl("div");
wrap.createEl("div", { cls: "dash-section-title", text: "📈 Saúde do sistema" });
const rings = wrap.createEl("div", { cls: "progress-rings" });
rings.innerHTML =
  ring("Vencidos",  vencidos,  total || 1,            "var(--color-red)")    +
  ring("Novas",     novas,     total || 1,            "var(--color-blue)")   +
  ring("Dominados", dominados, total || 1,            "var(--color-green)")  +
  ring("Revisões",  revision,  Math.max(revision,10), "var(--color-yellow)");
```

</div>

<div class="dashboard-col">

<div class="dash-section-title">🔴 Para fazer agora</div>

> [!danger]+ 🃏 Flashcards vencidos
> ```dataview
> TABLE proxima_revisao AS "📅 Revisão", dificuldade AS "Dif.", deck AS "Deck"
> FROM "04 - Flashcards"
> WHERE proxima_revisao <= date(today) AND file.name != "empty"
> SORT proxima_revisao ASC
> LIMIT 8
> ```

> [!warning]+ 🔁 Revisões agendadas
> ```dataview
> TABLE proxima_revisao AS "📅 Data", intervalo_dias AS "↩ Intervalo"
> FROM "06 - Revisão"
> WHERE proxima_revisao <= date(today) AND file.name != "empty"
> SORT proxima_revisao ASC
> LIMIT 6
> ```

</div>

</div>

---

<div class="dashboard-row">

<div class="dashboard-col">

<div class="dash-section-title">📥 Inbox — processar</div>

> [!note]+
> ```dataview
> TABLE file.mtime AS "⏱ Entrada", tags AS "Tags"
> FROM "01 - Caixa de Entrada"
> WHERE file.name != "empty"
> SORT file.mtime DESC
> LIMIT 10
> ```

</div>

<div class="dashboard-col">

<div class="dash-section-title">📝 Permanentes recentes</div>

> [!success]+
> ```dataview
> TABLE tags AS "Tags", status AS "Status"
> FROM "03 - Permanentes"
> WHERE file.name != "empty"
> SORT file.mtime DESC
> LIMIT 5
> ```

<div class="dash-section-title" style="margin-top:16px">🗺️ Mapas · 📚 Referências</div>

> [!abstract]+
> ```dataview
> LIST
> FROM "05 - Mapas"
> WHERE file.name != "empty"
> SORT file.name ASC
> ```

> [!info]+
> ```dataview
> TABLE autor AS "Autor", tipo AS "Tipo"
> FROM "02 - Referências"
> WHERE file.name != "empty"
> SORT file.mtime DESC
> LIMIT 4
> ```

</div>

</div>

---

> 📖 [[README]] · 🔌 [[PLUGINS]] · 🔄 [[Ritual Diário]] · 🗃 [[98 - Itens Arquivados/]]
