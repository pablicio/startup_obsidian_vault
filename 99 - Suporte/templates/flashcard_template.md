---
id: <% tp.date.now("YYYYMMDDHHmmss") %>
data: <% tp.date.now("YYYY-MM-DD") %>
tema: 
tipo: flashcard
deck: geral
dificuldade: nova
proxima_revisao: <% tp.date.now("YYYY-MM-DD") %>
intervalo_dias: 1
acertos: 0
erros: 0
tags:
  - flashcard
---

# 🃏 <% tp.file.title %>

## ❓ Pergunta

<% tp.file.cursor(1) %>

---

## ✅ Resposta



---

## 🧠 Mnemônico
> Uma associação, imagem ou história que ajuda a lembrar.



---

## 🔗 Nota de origem
- [[]]

---

## 📅 Próxima revisão: `<% tp.date.now("YYYY-MM-DD") %>`

> **Como revisar:**
> ✅ Acertei → `proxima_revisao` = hoje + (intervalo × 2)
> ❌ Errei → `proxima_revisao` = amanhã, `intervalo_dias` = 1
>
> Sequência padrão: 1 → 2 → 4 → 8 → 16 → 32 dias
