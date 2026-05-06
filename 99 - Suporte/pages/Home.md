---
banner: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600&q=80"
banner_y: 0.4
cssclasses:
  - home
tipo: home
tags:
  - home
---
# 🧠 Segundo Cérebro

## Ações rápidas

| 📥 Nova entrada | 📅 Diário de hoje | 🔄 Ritual diário | 🔍 Buscar |
|:-:|:-:|:-:|:-:|
| `Ctrl+N` | `Ctrl+T` | `Alt+H` | `Ctrl+Shift+F` |

---

## Para fazer agora

> [!danger]+ 🃏 Flashcards vencidos
> ```dataview
> TABLE proxima_revisao AS "Revisão", dificuldade AS "Dificuldade", deck AS "Deck"
> FROM "04 - Flashcards"
> WHERE proxima_revisao <= date(today) AND file.name != "empty"
> SORT proxima_revisao ASC
> LIMIT 10
> ```

> [!warning]+ 🔁 Revisões do dia
> ```dataview
> TABLE proxima_revisao AS "Agendado", intervalo_dias AS "Intervalo (dias)"
> FROM "06 - Revisão"
> WHERE proxima_revisao <= date(today) AND file.name != "empty"
> SORT proxima_revisao ASC
> LIMIT 8
> ```

---

## Inbox — processar

> [!note]+ 📥 Caixa de entrada
> ```dataview
> TABLE file.mtime AS "Entrada", tags AS "Tags"
> FROM "01 - Caixa de Entrada"
> WHERE file.name != "empty"
> SORT file.mtime DESC
> LIMIT 12
> ```

---

## Explorar

> [!success]+ 📝 Permanentes recentes
> ```dataview
> TABLE tags AS "Tags", status AS "Status"
> FROM "03 - Permanentes"
> WHERE file.name != "empty"
> SORT file.mtime DESC
> LIMIT 6
> ```

> [!abstract]+ 🗺️ Mapas de conteúdo
> ```dataview
> LIST
> FROM "05 - Mapas"
> WHERE file.name != "empty"
> SORT file.name ASC
> ```

> [!info]+ 📚 Referências recentes
> ```dataview
> TABLE autor AS "Autor", fonte AS "Fonte"
> FROM "02 - Referências"
> WHERE file.name != "empty"
> SORT file.mtime DESC
> LIMIT 5
> ```

---

## Vault

> [!example]+ 📊 Resumo geral
> ```dataview
> TABLE WITHOUT ID
>   split(file.folder, "/")[0] AS "Área",
>   length(rows) AS "Notas"
> FROM "01 - Caixa de Entrada" OR "02 - Referências" OR "03 - Permanentes" OR "04 - Flashcards" OR "05 - Mapas" OR "06 - Revisão"
> WHERE file.name != "empty"
> GROUP BY split(file.folder, "/")[0]
> SORT rows[0].file.folder ASC
> ```

---

> 📖 [[README]] · 🔌 [[PLUGINS]] · 🔄 [[Ritual Diário]] · 📅 [[00 - Diário/]] · 🗃 [[98 - Itens Arquivados/]]
