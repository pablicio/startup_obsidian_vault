---
date: <% tp.date.now("YYYY-MM-DD") %>
dia_semana: <% tp.date.now("dddd") %>
exercise: false
early_wake_up: false
diet: false
energia: 5
humor: 5
tags:
  - diário
---

# 📅 <% tp.date.now("DD [de] MMMM [de] YYYY") %>

---

## 🎯 Intenção do dia
> Uma frase que define o foco de hoje.

<% tp.file.cursor(1) %>

---

## 🐸 Tarefa mais importante
- [ ] 

## ✅ Tarefas
- [ ] 
- [ ] 
- [ ] 

---

## 🔴 Revisões de hoje

```dataview
TABLE proxima_revisao AS "📅 Data", intervalo_dias AS "Intervalo", tipo AS "Tipo"
FROM "04 - Flashcards" OR "06 - Revisão"
WHERE proxima_revisao <= date(today) AND file.name != "empty"
SORT proxima_revisao ASC
LIMIT 10
```

> Abra cada nota e pressione `Alt+E` para revisar e atualizar o intervalo automaticamente.

---

## 🌱 Seeds de hoje
> Capture sem filtro — fragmentos, perguntas, intuições, frases que chamaram atenção.

- 
- 
- 

---

## 📚 O que aprendi hoje?
> Active Recall: escreva **sem consultar materiais**. Isso é a parte mais importante da nota.

- 

---

## 📥 Captura rápida
> Links, referências, pensamentos que surgiram ao longo do dia.

- 

---

## 🌙 Reflexão

**O que foi bem:**

**O que pode melhorar:**

**Gratidão:**

---

## 📊 Hábitos

| Hábito | ✅ |
|--------|----|
| ⏰ Acordar cedo | |
| 🏃 Exercício | |
| 🥗 Dieta | |
| 🧠 Revisei flashcards | |
| 📖 Aprendi algo novo | |

---

*← [[<% tp.date.now("YYYY-MM-DD", -1, "YYYY-MM-DD") %>]] · [[<% tp.date.now("YYYY-MM-DD", 1, "YYYY-MM-DD") %>]] →*
