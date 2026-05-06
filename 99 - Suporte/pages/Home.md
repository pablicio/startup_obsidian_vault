---
tipo: home
tags:
  - home
---

# 🧠 Segundo Cérebro

> *"Um lugar para pensar melhor, não só guardar coisas."*

---

## ⚡ Ações rápidas

| Ação | Atalho |
|------|--------|
| 📥 Nova nota (inbox) | `Ctrl+N` |
| 🔍 Busca global | `Ctrl+Shift+F` |
| 📅 Nota de hoje | `Ctrl+T` (via Periodic Notes) |
| ⚡ QuickAdd captura | `Alt+Q` |

---

## 🔁 Revisões de hoje

```dataview
TABLE proxima_revisao, intervalo_dias, repeticoes
FROM "06 - Revisão"
WHERE proxima_revisao <= date(today)
SORT proxima_revisao ASC
```

---

## 📥 Caixa de Entrada (processar)

```dataview
TABLE file.mtime AS "Modificado"
FROM "01 - Caixa de Entrada"
SORT file.mtime DESC
LIMIT 8
```

---

## 🃏 Flashcards para hoje

```dataview
TABLE proxima_revisao, dificuldade, deck
FROM "04 - Flashcards"
WHERE proxima_revisao <= date(today)
SORT proxima_revisao ASC
```

---

## 📝 Últimas notas permanentes

```dataview
TABLE data, tags
FROM "03 - Permanentes"
SORT file.mtime DESC
LIMIT 6
```

---

## 🗺️ Mapas de conteúdo (MOCs)

```dataview
LIST
FROM "05 - Mapas"
SORT file.mtime DESC
```

---

## 📚 Referências recentes

```dataview
TABLE autor, fonte
FROM "02 - Referências"
SORT file.mtime DESC
LIMIT 5
```

---

## 📊 Status do vault

```dataview
TABLE length(rows) AS "Total"
FROM "01 - Caixa de Entrada" OR "03 - Permanentes" OR "02 - Referências" OR "04 - Flashcards" OR "06 - Revisão"
GROUP BY split(file.folder, "/")[0] AS Pasta
```
