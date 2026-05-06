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

# 🃏 Flashcard

## ❓ Pergunta
> Escreva a pergunta de forma clara e específica.



---

## ✅ Resposta
> Resposta direta. Use suas próprias palavras.



---

## 🧠 Dica de memória (mnemônico)
> Alguma associação, história ou imagem que ajuda a lembrar?



---

## 🔗 Nota relacionada
- [[]]

---

## 📅 Histórico de revisão

| Data | Resultado | Próxima revisão |
|------|-----------|-----------------|
| <% tp.date.now("YYYY-MM-DD") %> | 🆕 Nova | <% tp.date.now("YYYY-MM-DD") %> |

---

*Intervalo atual: **<% tp.frontmatter.intervalo_dias %> dia(s)***

> **Como revisar manualmente:**
> ✅ Acertou → dobre o intervalo (1→2→4→8→16→32 dias)
> ❌ Errou → volte ao intervalo 1
