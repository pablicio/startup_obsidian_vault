---
date: <% tp.date.now("YYYY-MM-DD") %>
semana: <% tp.date.now("[W]WW YYYY") %>
tipo: semanal
tags:
  - semanal
---

# 📆 Semana <% tp.date.now("WW [de] YYYY") %>
**<% tp.date.now("DD/MM") %> → <% tp.date.now("DD/MM", 6) %>**

---

## 📊 Estado atual do vault

```dataview
TABLE WITHOUT ID
  split(file.folder, "/")[0] AS "Área",
  length(rows) AS "Notas"
FROM "01 - Caixa de Entrada" OR "02 - Referências" OR "03 - Permanentes" OR "04 - Flashcards" OR "05 - Mapas" OR "06 - Revisão"
WHERE file.name != "empty"
GROUP BY split(file.folder, "/")[0]
SORT rows[0].file.folder ASC
```

---

## 📥 Inbox — processar agora

```dataview
TABLE file.mtime AS "Entrada", tags
FROM "01 - Caixa de Entrada"
WHERE file.name != "empty"
SORT file.mtime DESC
LIMIT 15
```

---

## 🔁 Revisões pendentes (atrasadas)

```dataview
TABLE proxima_revisao AS "Agendado", intervalo_dias AS "Intervalo"
FROM "06 - Revisão"
WHERE proxima_revisao <= date(today) AND file.name != "empty"
SORT proxima_revisao ASC
```

---

## 🃏 Flashcards atrasados

```dataview
TABLE proxima_revisao AS "Venceu", deck AS "Deck"
FROM "04 - Flashcards"
WHERE proxima_revisao <= date(today) AND file.name != "empty"
SORT proxima_revisao ASC
```

---

## 🏆 Vitórias da semana
> O que foi bem? O que realizei?

- 

---

## 🧠 Active Recall semanal
> Escreva sem consultar nada: o que aprendi esta semana?

- 

---

## 🎯 Foco da próxima semana
- [ ] 
- [ ] 
- [ ] 

---

## 📋 Métricas manuais

| Métrica | Qtd |
|---------|-----|
| Notas criadas | |
| Notas processadas do inbox | |
| Flashcards revisados | |
| Livros / artigos lidos | |
| Horas de estudo | |

---

*← [[<% tp.date.now("YYYY-MM-DD", -7) %>]] · Próxima: [[<% tp.date.now("YYYY-MM-DD", 7) %>]] →*
