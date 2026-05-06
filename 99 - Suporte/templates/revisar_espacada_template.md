<%*
// ═══════════════════════════════════════════════════════════
//  REVISAR: ATUALIZAR REPETIÇÃO ESPAÇADA
//  Roda sobre o arquivo atual (flashcard ou revisão)
//  Atualiza frontmatter automaticamente com o algoritmo SM-2
// ═══════════════════════════════════════════════════════════

const file = tp.file.find_tfile(tp.file.title);
if (!file) {
  new Notice("❌ Arquivo não encontrado.");
  tR = "";
  return;
}

const cache = app.metadataCache.getFileCache(file);
const fm = cache?.frontmatter;

if (!fm || (fm.proxima_revisao === undefined && fm.intervalo_dias === undefined)) {
  new Notice("❌ Esta nota não tem frontmatter de revisão espaçada.");
  tR = "";
  return;
}

// ─── Pergunta ao usuário ────────────────────────────────────
const opcoes  = ["✅  Lembrei fácil", "😐  Lembrei com esforço", "❌  Esqueci"];
const valores = ["facil", "medio", "dificil"];

const resultado = await tp.system.suggester(opcoes, valores, true, "Como foi a revisão?");
if (!resultado) { tR = ""; return; }

// ─── Cálculo do novo intervalo (SM-2 simplificado) ─────────
const intervaloAtual = parseInt(fm.intervalo_dias) || 1;
let novoIntervalo;

if (resultado === "facil")   novoIntervalo = Math.round(intervaloAtual * 2.5);
if (resultado === "medio")   novoIntervalo = Math.round(intervaloAtual * 1.5);
if (resultado === "dificil") novoIntervalo = 1;

novoIntervalo = Math.max(novoIntervalo, 1); // mínimo 1 dia

// ─── Datas ──────────────────────────────────────────────────
const hoje   = moment().format("YYYY-MM-DD");
const proxima = moment().add(novoIntervalo, "days").format("YYYY-MM-DD");

// ─── Atualiza frontmatter ───────────────────────────────────
await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {
  frontmatter.proxima_revisao = proxima;
  frontmatter.intervalo_dias  = novoIntervalo;
  frontmatter.ultima_revisao  = hoje;

  // Contadores
  if (resultado === "facil")   frontmatter.acertos    = (frontmatter.acertos    || 0) + 1;
  if (resultado === "dificil") frontmatter.erros       = (frontmatter.erros      || 0) + 1;
  if (resultado !== "dificil") frontmatter.repeticoes  = (frontmatter.repeticoes || 0) + 1;

  // Status de dificuldade
  if (resultado === "facil" && novoIntervalo >= 16) {
    frontmatter.dificuldade = "dominado";
  } else if (resultado === "dificil") {
    frontmatter.dificuldade = "nova";
  } else {
    frontmatter.dificuldade = "aprendendo";
  }
});

// ─── Feedback visual ────────────────────────────────────────
const emoji = resultado === "facil" ? "✅" : resultado === "medio" ? "😐" : "❌";
new Notice(`${emoji} Próxima revisão: ${proxima}  (+${novoIntervalo} dias)`, 4000);

tR = "";
_%>
