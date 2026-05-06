---
date: 2026-05-05
semana: 2026-W19
tipo: semanal
tags:
  - semanal
  - revisão
---

# 📆 Revisão Semanal — Semana 19 · 2026

> A revisão semanal é o ritual que mantém o sistema vivo. Sem ela, a caixa de entrada acumula e o vault para de crescer.

---

## 🗓️ Período
**De:** 2026-04-28 (seg) **Até:** 2026-05-04 (dom)

---

## 📥 1. Processar Caixa de Entrada

> Revisar tudo em `01 - Caixa de Entrada` e decidir o destino de cada item.

```dataview
TABLE file.mtime AS "Entrada", status AS "Status"
FROM "01 - Caixa de Entrada"
WHERE file.name != "empty"
SORT file.mtime ASC
```

**Seeds processadas esta semana:**
- [x] `MVP não é produto pequeno` → virou permanente em rascunho
- [x] `Fechar a fonte antes de escrever` → conectado à permanente existente
- [ ] `Toda métrica incentiva um comportamento` → processar semana que vem

---

## 📝 2. Notas criadas esta semana

**Permanentes:**
- [[Produto é hipótese antes de ser solução]] ✅ maduro
- [[A velocidade de aprendizagem é vantagem competitiva de startups]] ✅ maduro
- [[Métrica acionável é a que muda uma decisão]] — rascunho

**Referências:**
- [[The Lean Startup - Eric Ries]] — processado
- [[Thinking in Systems - Donella Meadows]] — processado

**Mapas:**
- [[Mapa - Produto e Startup]] — criado

---

## 🔁 3. Revisões vencidas

```dataview
TABLE proxima_revisao AS "Vence", intervalo_dias AS "Intervalo"
FROM "06 - Revisão" OR "04 - Flashcards"
WHERE proxima_revisao <= date(today)
SORT proxima_revisao ASC
```

---

## 🔗 4. Conexões órfãs

> Notas sem nenhum link de entrada — candidatas a conectar ou arquivar.

```dataview
LIST
FROM "03 - Permanentes"
WHERE length(file.inlinks) = 0
```

---

## 🌱 5. Seeds para a próxima semana

- Criar flashcard: North Star Metric — definição e exemplos
- Processar `Toda métrica incentiva um comportamento` → possível permanente
- Explorar: existe um parallelo entre pivotar em startup e atualizar nota permanente?

---

## 📊 6. Saúde do vault

| Indicador | Valor |
|-----------|-------|
| Permanentes maduras | 6 |
| Permanentes em rascunho | 2 |
| Flashcards ativos | 8 |
| Notas em inbox | 3 |
| Revisões em dia | ✅ |

---

## 🌙 Reflexão da semana

**O que funcionou bem no sistema:**
O tema de produto criou densidade rápida — 4 permanentes conectadas em 3 dias. O mapa ajuda a ver o cluster.

**O que ajustar:**
Seeds estão acumulando antes de serem processadas. Processar seeds diariamente (5 min), não só na revisão semanal.

**Próximo foco:**
Aprofundar o tema de métricas — criar permanente sobre North Star Metric e conectar com o que já existe sobre Product-Market Fit.

---

*← Semana 18 · [[2026-W20]] →*
