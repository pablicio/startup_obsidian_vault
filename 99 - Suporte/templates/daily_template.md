---
date: <% tp.date.now("YYYY-MM-DD") %>
dia_semana: <% tp.date.now("dddd") %>
exercise: false
early_wake_up: false
project: ""
diet: false
frog: ""
energia: 5
humor: 5
tags:
  - diário
---

# 📅 <% tp.date.now("DD [de] MMMM [de] YYYY") %>

## 🎯 Intenção do dia
> Uma frase que define o foco de hoje.

---

## 🐸 Tarefa mais importante (Frog)
- [ ] **<% tp.frontmatter.frog %>**

## ✅ Tarefas do dia
- [ ] 
- [ ] 
- [ ] 

---

## 📥 Captura rápida
> Ideias, pensamentos, links que surgirem ao longo do dia.

- 

---

## 📚 O que aprendi hoje?
> Active Recall: escreva sem olhar para os materiais.

- 

---

## 🔁 Revisões agendadas
```dataview
LIST
FROM "06 - Revisão"
WHERE proxima_revisao = date(today)
```

---

## 🌙 Reflexão noturna
**O que foi bem:**

**O que pode melhorar:**

**Gratidão:**

---

## 📊 Hábitos
| Hábito | ✅ |
|--------|-----|
| Acordar cedo | <% tp.frontmatter.early_wake_up ? "✅" : "❌" %> |
| Exercício | <% tp.frontmatter.exercise ? "✅" : "❌" %> |
| Dieta | <% tp.frontmatter.diet ? "✅" : "❌" %> |
