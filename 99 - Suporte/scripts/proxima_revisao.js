/**
 * proxima_revisao.js
 * Calcula a próxima data de revisão baseada no intervalo atual.
 * 
 * Uso no template:
 *   <% tp.user.proxima_revisao(tp, 1) %>   → amanhã
 *   <% tp.user.proxima_revisao(tp, 7) %>   → daqui 7 dias
 *   <% tp.user.proxima_revisao(tp) %>      → hoje (padrão)
 */
function proxima_revisao(tp, dias = 0) {
  const hoje = new Date();
  hoje.setDate(hoje.getDate() + dias);
  return hoje.toISOString().split("T")[0];
}

module.exports = proxima_revisao;
