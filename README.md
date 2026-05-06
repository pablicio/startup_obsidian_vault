# 🧠 Segundo Cérebro — Guia Completo do Sistema

> **Sistema de aprendizagem completo baseado em:** Zettelkasten + Spaced Repetition + Active Recall + MOCs
> Funciona offline, com Markdown puro. Plugins são opcionais, não obrigatórios.

---

## 📁 Estrutura do Vault

```
Segundo Cérebro/
│
├── 00 - Diário/          → Notas diárias (captura + reflexão)
├── 01 - Caixa de Entrada/ → Inbox: tudo que entra aqui primeiro
├── 02 - Referências/     → Livros, artigos, vídeos processados
├── 03 - Permanentes/     → Conhecimento consolidado (Zettelkasten)
├── 04 - Flashcards/      → Cards de memorização (Spaced Repetition)
├── 05 - Mapas/           → MOCs: mapas de conteúdo por área
├── 06 - Revisão/         → Notas agendadas para revisão espaçada
├── 98 - Itens Arquivados/ → Notas inativas / arquivo morto
└── 99 - Suporte/
    ├── attachments/      → Imagens e arquivos
    ├── pages/            → Home, PLUGINS, páginas especiais
    └── templates/        → Todos os templates do sistema
```

---

## 🔄 O Fluxo Completo

```
CAPTURA → PROCESSAMENTO → CONEXÃO → MEMORIZAÇÃO → REVISÃO → PRODUÇÃO
```

### 1. 📥 CAPTURA
Tudo vai primeiro para `01 - Caixa de Entrada`.
- Notas rápidas, links, ideias, resumos de vídeos
- Sem se preocupar com formato
- Meta: inbox zero toda semana

### 2. 🧠 PROCESSAMENTO
Ao revisar o inbox, decida:
- **Ideia atômica nova?** → Crie nota permanente em `03 - Permanentes` (use `permanente_template`)
- **Material de referência?** → Mova para `02 - Referências` (use `referencia_template`)
- **Precisa memorizar?** → Crie flashcard em `04 - Flashcards` (use `flashcard_template`)
- **Não tem valor?** → Delete ou arquive em `98 - Itens Arquivados`

### 3. 🔗 CONEXÃO
Toda nota permanente deve ter pelo menos **2 links** para outras notas.
- Use `[[nome da nota]]` para linkar
- Crie MOCs em `05 - Mapas` para agrupar notas relacionadas

### 4. 🃏 MEMORIZAÇÃO (Spaced Repetition)
Para conteúdo que precisa ser memorizado:
- Crie flashcards em `04 - Flashcards`
- **Com plugin:** Use `obsidian-spaced-repetition` (automático)
- **Sem plugin:** Atualize `proxima_revisao` manualmente no frontmatter

### 5. 🔁 REVISÃO ESPAÇADA
Consulte `Home.md` diariamente para ver o que precisa ser revisado.
- Intervalo inicial: 1 dia
- Acertou? → Dobre o intervalo (1 → 2 → 4 → 8 → 16 → 32 dias)
- Errou? → Volta para 1 dia

### 6. 📤 PRODUÇÃO
Use seu conhecimento para criar:
- Artigos, posts, projetos
- Novas conexões entre ideias
- Ensinar alguém (Técnica Feynman)

---

## 📋 Templates disponíveis

| Template | Pasta destino | Quando usar |
|----------|--------------|-------------|
| `daily_template` | `00 - Diário` | Todo dia (automático) |
| `semanal_template` | `00 - Diário` | Toda segunda-feira |
| `permanente_template` | `03 - Permanentes` | Ao criar nota atômica |
| `referencia_template` | `02 - Referências` | Ao processar fonte externa |
| `flashcard_template` | `04 - Flashcards` | Ao criar card de memória |
| `revisao_template` | `06 - Revisão` | Para agendar revisão de nota importante |
| `moc_template` | `05 - Mapas` | Ao criar mapa de uma área de conhecimento |
| `note_template` | qualquer | Template genérico simples |

---

## 🃏 Sistema de Spaced Repetition

### Sem plugin (manual)
1. Use `flashcard_template` ou `revisao_template`
2. Frontmatter tem `proxima_revisao` e `intervalo_dias`
3. Home.md mostra automaticamente o que precisa ser revisado hoje (via Dataview)
4. Após revisar: atualize `proxima_revisao = hoje + intervalo` e dobre o intervalo se acertou

### Com plugin (recomendado)
1. Instale `obsidian-spaced-repetition`
2. Em qualquer nota, adicione:
   ```
   #flashcard
   Pergunta :: Resposta
   ```
3. O plugin agenda automaticamente com algoritmo SM-2 (mesmo do Anki)

---

## 🧠 Active Recall nas notas diárias

No template diário, há uma seção **"O que aprendi hoje?"**:
- Escreva SEM consultar materiais
- Force seu cérebro a recuperar ativamente
- Isso é 2-3x mais eficiente que reler

---

## 🗺️ MOCs — Maps of Content

Mapas de Conteúdo são índices vivos de um tema.
- Ficam em `05 - Mapas`
- Criam visão panorâmica de uma área
- Usam Dataview para se atualizar automaticamente
- Exemplo: `Mapa - Aprendizagem`, `Mapa - Marketing`, `Mapa - Programação`

---

## 🔌 Plugins essenciais

Veja o guia completo em: [[PLUGINS]]

**Mínimo para funcionar bem:**
1. `templater-obsidian` ✅ (já instalado)
2. `dataview` ✅ (já instalado)
3. `obsidian-spaced-repetition` ← instalar
4. `calendar` ← instalar
5. `periodic-notes` ← instalar
6. `quickadd` ← instalar

---

## 📏 Regras do sistema

| Regra | Detalhes |
|-------|----------|
| **Inbox zero semanal** | Processar toda a caixa de entrada toda semana |
| **Nota atômica** | Cada permanente = 1 ideia clara |
| **2 links mínimo** | Toda permanente conecta a pelo menos 2 outras |
| **Revisão diária** | Checar Home.md para revisões agendadas |
| **Escrever para ensinar** | Processe como se fosse explicar para alguém |
| **Nunca delete do inbox** | Archive em 98 se não servir |

---

## 🚀 Por onde começar (primeiros 3 dias)

**Dia 1:**
- [ ] Abrir `Home.md` como página inicial
- [ ] Criar primeira nota diária com `daily_template`
- [ ] Jogar 3 ideias na Caixa de Entrada

**Dia 2:**
- [ ] Processar as 3 notas do inbox
- [ ] Criar 1 nota permanente
- [ ] Criar 1 flashcard sobre algo que aprendeu

**Dia 3:**
- [ ] Criar seu primeiro MOC em `05 - Mapas`
- [ ] Instalar `obsidian-spaced-repetition`
- [ ] Fazer primeira revisão semanal

---

*Sistema criado em 2026-05-06 | Baseado em: Zettelkasten (Luhmann), SM-2 (Wozniak), Active Recall (Roediger & Karpicke), MOCs (Nick Milo)*
