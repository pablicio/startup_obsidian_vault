---
id: <% tp.date.now("YYYYMMDDHHmmss") %>
titulo: 
data_criacao: <% tp.date.now("YYYY-MM-DD") %>
proxima_revisao: <% tp.date.now("YYYY-MM-DD") %>
ultima_revisao: 
intervalo_dias: 1
repeticoes: 0
facilidade: 2.5
tipo: revisao
nota_origem: 
tags:
  - revisao
---

# 🔁 Revisão: <% tp.file.title %>

## 📝 Conteúdo para revisar

> Cole aqui o conteúdo da nota original, ou escreva um resumo conciso.



---

## ❓ Perguntas de Active Recall

> Tente responder SEM olhar para as respostas abaixo. Cubra com a mão ou feche os olhos.

**P1:**

**P2:**

**P3:**

---

## ✅ Respostas

**R1:**

**R2:**

**R3:**

---

## 📊 Log de revisões

| Data | Intervalo anterior | Resultado | Próxima revisão |
|------|-------------------|-----------|-----------------|
| <% tp.date.now("YYYY-MM-DD") %> | — | 🆕 Criada | <% tp.date.now("YYYY-MM-DD") %> |

---

## 📅 Algoritmo de espaçamento (manual)

| Avaliação | Próximo intervalo |
|-----------|-------------------|
| ❌ Difícil / Errei | 1 dia |
| 😐 Médio | mesmo × 1.5 |
| ✅ Fácil | mesmo × 2.5 |

> **Nota original:** [[<% tp.frontmatter.nota_origem %>]]
