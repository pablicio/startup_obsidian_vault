/**
 * dobrar_intervalo.js
 * Dado o intervalo atual (em dias), retorna o próximo intervalo no algoritmo SM-2 simplificado.
 * Acerto → dobra. Erro → volta a 1.
 *
 * Uso no template:
 *   Próximo intervalo (acerto): <% tp.user.dobrar_intervalo(tp, 4) %>   → 8
 *   Próximo intervalo (erro):   <% tp.user.dobrar_intervalo(tp, 0) %>   → 1
 */
function dobrar_intervalo(tp, intervalo_atual = 1) {
  const n = parseInt(intervalo_atual, 10);
  if (!n || n <= 0) return 1;
  return n * 2;
}

module.exports = dobrar_intervalo;
