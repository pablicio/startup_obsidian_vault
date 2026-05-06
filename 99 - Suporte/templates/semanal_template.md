---
date: <% tp.date.now("YYYY-MM-DD") %>
week: <% tp.date.now("[W]WW YYYY") %>
tipo: semanal
tags:
  - semanal
---

# 📆 Revisão Semanal — <% tp.date.now("[Semana] WW [de] YYYY") %>

**Período:** <% tp.date.now("DD/MM") %> → <% tp.date.now("DD/MM", 6) %>

---

## 🏆 Vitórias da semana
> O que foi bem? O que você realizou?

- 
- 

---

## 📥 Caixa de entrada
> Quantas notas estão no inbox? Processe ao menos as mais importantes.

```dataview
LIST
FROM "01 - Caixa de Entrada"
SORT file.mtime DESC
LIMIT 10
```

---

## 🧠 O que aprendi esta semana?
> Active Recall semanal. Escreva sem consultar notas.

- 

---

## 🔁 Revisões pendentes
```dataview
LIST
FROM "06 - Revisão"
WHERE proxima_revisao <= date(today)
SORT proxima_revisao ASC
```

---

## 🎯 Foco da próxima semana
- [ ] 
- [ ] 
- [ ] 

---

## 📊 Métricas
| Métrica | Valor |
|---------|-------|
| Notas criadas | |
| Notas processadas | |
| Flashcards revisados | |
| Livros/artigos lidos | |
