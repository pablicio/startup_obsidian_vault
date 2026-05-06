/**
 * saudacao.js
 * Retorna uma saudação baseada no horário do dia.
 * 
 * Uso no template:
 *   <% tp.user.saudacao(tp) %>  →  "Bom dia", "Boa tarde" ou "Boa noite"
 */
function saudacao(tp) {
  const hora = new Date().getHours();
  if (hora >= 5 && hora < 12) return "Bom dia";
  if (hora >= 12 && hora < 18) return "Boa tarde";
  return "Boa noite";
}

module.exports = saudacao;
