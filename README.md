# 🧠 Segundo Cérebro — Guia do Sistema

> **Baseado em:** Zettelkasten · Spaced Repetition SM-2 · Active Recall · MOCs (LYT)
> Funciona 100% offline com Markdown puro. Dataview + Templater são os únicos plugins obrigatórios.

---

## 📁 Estrutura do vault

```
00 - Diário/            → Notas diárias e semanais
01 - Caixa de Entrada/  → Tudo que entra aqui primeiro (inbox)
02 - Referências/       → Livros, artigos, vídeos processados
03 - Permanentes/       → Conhecimento consolidado (Zettelkasten)
04 - Flashcards/        → Cards de memorização (Spaced Repetition)
05 - Mapas/             → MOCs: visão panorâmica por área
06 - Revisão/           → Notas completas agendadas para revisão
98 - Itens Arquivados/  → Arquivo morto
99 - Suporte/
    ├── templates/      → Todos os templates
    ├── scripts/        → Scripts utilitários
    └── pages/          → Home, PLUGINS, páginas especiais
```

---

## 🌱 Os 4 tipos de nota

O sistema usa uma progressão natural de maturidade:

| Tipo              | Template              | Onde                    | Descrição                                         |
| ----------------- | --------------------- | ----------------------- | ------------------------------------------------- |
| 🌱 **Caixa de Entrada**       | `seed_template`       | `01 - Caixa de Entrada` | Ideia crua, intuição, pergunta sem resposta ainda |
| 📚 **Referência** | `referencia_template` | `02 - Referências`      | Fonte processada (livro, artigo, vídeo)           |
| 🧠 **Permanente** | `permanente_template` | `03 - Permanentes`      | Ideia atômica, com suas palavras, com links       |
| 🃏 **Flashcard**  | `flashcard_template`  | `04 - Flashcards`       | Uma pergunta + resposta para memorização          |

**Fluxo de maturidade:**
```
🌱 Caixa de Entrada  →  📚 Referência  →  🧠 Permanente  →  🃏 Flashcard
(captura)    (fonte)           (insight)          (memória)
```

> Uma Entrada pode virar diretamente uma Permanente se a ideia já estiver clara o suficiente.

---

## 🔄 O fluxo completo

```
CAPTURAR → PROCESSAR → CONECTAR → MEMORIZAR → REVISAR
```

### 1. 📥 Capturar
- Tudo entra em `01 - Caixa de Entrada`
- Use `seed_template` para ideias rápidas
- Use `note_template` para capturas com mais contexto
- **Regra:** nunca pense em organização na hora de capturar

### 2. 🧠 Processar (inbox zero toda semana)
Ao processar cada nota do inbox, decida:

| Pergunta | Ação |
|----------|------|
| É uma ideia que quero desenvolver? | → `03 - Permanentes` com `permanente_template` |
| É conteúdo de uma fonte externa? | → `02 - Referências` com `referencia_template` |
| Preciso memorizar isso? | → `04 - Flashcards` com `flashcard_template` |
| Precisa de revisão profunda depois? | → `06 - Revisão` com `revisao_template` |
| Não tem valor? | → Archive em `98 - Itens Arquivados` |

### 3. 🔗 Conectar
- Toda nota permanente precisa de **pelo menos 2 links** para outras notas
- Use `[[nome da nota]]` para linkar
- Se várias notas se relacionam: crie um MOC em `05 - Mapas`

### 4. 🃏 Memorizar
- Crie flashcards para o que precisa ficar na memória de longo prazo
- Uma pergunta clara → uma resposta clara
- Adicione um mnemônico quando possível

### 5. 🔁 Revisar
- Abra `Home.md` todo dia: ela mostra o que está vencido
- Use o script de revisão automática (ver seção abaixo) para atualizar os intervalos com 1 clique

---

## 📅 Nota diária — ritual

A nota diária é o centro operacional do dia. Use `daily_template`.

### Ritual da manhã (5–10 min)
1. Crie a nota do dia via `Ctrl+T` (Periodic Notes) ou pelo botão na Home
2. Escreva a **intenção do dia** — uma frase de foco
3. Defina a **tarefa mais importante (frog)**
4. Veja as revisões e flashcards vencidos

### Durante o dia
- Capture seeds e ideias na seção **Captura rápida**
- Não processe agora — apenas capture

### Ritual da noite (5–10 min)
1. Preencha **O que aprendi hoje?** — escreva SEM consultar materiais (Active Recall)
2. Reflita: o que foi bem / o que pode melhorar
3. Atualize os hábitos do dia

> **Por que Active Recall?** Recuperar informação da memória é 2–3× mais eficiente do que reler. Mesmo escrever poucos pontos já consolida o aprendizado.

---

## 🃏 Repetição espaçada — cálculo automático

### O algoritmo (SM-2 simplificado)

Após revisar um card, você avalia:

| Avaliação | Próximo intervalo |
|-----------|-------------------|
| ✅ Lembrei fácil | `intervalo × 2.5` |
| 😐 Lembrei com esforço | `intervalo × 1.5` |
| ❌ Esqueci | Volta para 1 dia |

**Progressão típica de um card fácil:**
```
1 → 3 → 7 → 18 → 45 → 113 dias
```

### Como revisar (com cálculo automático)

Existe um template-script que **atualiza o frontmatter automaticamente** com 1 clique:

1. Abra o flashcard ou nota de revisão
2. Pressione `Alt+E` (ou vá em: **Templater → "Revisar: Atualizar Repetição Espaçada"**)
3. Um popup pergunta: Acertei / Médio / Errei
4. O script calcula e salva automaticamente:
   - `proxima_revisao` — nova data
   - `intervalo_dias` — novo intervalo
   - `ultima_revisao` — data de hoje
   - `acertos` / `erros` — contador atualizado

> **Para configurar o hotkey:**
> Configurações → Teclas de atalho → buscar "Templater" → encontre o template `revisar_espacada_template` → atribua `Alt+E`

### Como revisar (manual, se preferir)
Após revisar uma nota, edite o frontmatter:
```yaml
proxima_revisao: 2026-05-14   # hoje + intervalo
intervalo_dias: 8              # dobrou de 4
```

---

## 🌱 Seeds — notas embrionárias

Seeds são **ideias cruas que ainda não viraram nada**. São diferentes de notas de inbox comuns porque:
- Não precisam de contexto ou explicação
- São fragmentos: uma pergunta, uma intuição, uma frase que chamou atenção
- O objetivo é capturar sem filtro

**Exemplos de seeds:**
- *"Por que sistemas simples sobrevivem mais que sistemas complexos?"*
- *"Ideia: usar mapas mentais para planejar projetos de escrita"*
- *"Reler: capítulo 4 do livro X — algo não encaixou"*

**Como usar:**
1. Use `seed_template` para criar
2. Seeds ficam em `01 - Caixa de Entrada` com `status: semente`
3. No processamento semanal, decida: desenvolver → Permanente, ou descartar → Archive
4. Uma boa seed tem uma **tensão criativa** — uma pergunta que quer ser respondida

---

## 🗺️ MOCs — Mapas de Conteúdo

MOCs são **índices vivos** de uma área de conhecimento. Ficam em `05 - Mapas`.

- Não são resumos — são **mapas de navegação**
- Apontam para as notas permanentes de um tema
- O Dataview os mantém atualizados automaticamente
- Comece um MOC quando tiver 5+ notas permanentes sobre um tema

---

## 📋 Templates disponíveis

| Template | Onde criar | Para que |
|----------|-----------|----------|
| `daily_template` | `00 - Diário` | Nota diária (manhã + noite) |
| `semanal_template` | `00 - Diário` | Revisão semanal |
| `seed_template` | `01 - Caixa de Entrada` | Ideia crua, intuição rápida |
| `note_template` | `01 - Caixa de Entrada` | Nota de inbox com contexto |
| `referencia_template` | `02 - Referências` | Fonte processada |
| `permanente_template` | `03 - Permanentes` | Ideia atômica desenvolvida |
| `flashcard_template` | `04 - Flashcards` | Card de memorização |
| `revisao_template` | `06 - Revisão` | Nota para revisão profunda |
| `moc_template` | `05 - Mapas` | Mapa de conteúdo de uma área |
| `revisar_espacada_template` | *(roda no arquivo atual)* | Atualiza SR automaticamente |

---

## 🔌 Plugins

Veja o guia completo: [[PLUGINS]]

**Obrigatórios:**
- `dataview` — painéis e queries automáticas
- `templater-obsidian` — templates dinâmicos e script de revisão

**Recomendados:**
- `periodic-notes` — notas diárias/semanais automáticas
- `calendar` — navegação visual por datas
- `quickadd` — captura rápida com hotkey
- `obsidian-spaced-repetition` — alternativa ao sistema manual (usa SR inline com `#flashcard`)

---

## 📏 Regras do sistema

| Regra | Por quê |
|-------|---------|
| **Inbox zero semanal** | Acúmulo no inbox = conhecimento perdido |
| **1 ideia por permanente** | Notas atômicas se conectam melhor |
| **2 links mínimo** | Sem links, a nota não existe no sistema |
| **Revisar antes de criar** | Veja o que está vencido antes de adicionar mais |
| **Escreva como se fosse ensinar** | Força clareza; revela o que você não sabe |
| **Seeds sem filtro** | Capture tudo, processe depois |

---

## 🚀 Primeiros 3 dias

**Dia 1 — Configurar**
- [ ] Definir `Home.md` como página de abertura do vault
- [ ] Criar primeira nota diária com `daily_template`
- [ ] Lançar 3–5 seeds na Caixa de Entrada

**Dia 2 — Processar**
- [ ] Processar as seeds do dia anterior
- [ ] Criar 1 nota permanente a partir de uma seed
- [ ] Criar 1 flashcard sobre algo que aprendeu

**Dia 3 — Conectar**
- [ ] Linkar a nota permanente a pelo menos 2 outras
- [ ] Criar seu primeiro MOC em `05 - Mapas`
- [ ] Configurar o hotkey `Alt+E` para o script de revisão

---

*Sistema criado em 2026-05-06 · Baseado em: Zettelkasten (Luhmann) · SM-2 (Wozniak) · Active Recall (Roediger & Karpicke) · MOCs (Nick Milo)*
