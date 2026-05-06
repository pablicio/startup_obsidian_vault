---
id: 20260428112244
titulo: Sistemas simples sobrevivem, sistemas complexos travam
data: 2026-04-28
atualizado: 2026-05-03
fonte: "[[Thinking in Systems - Donella Meadows]]"
autor: Donella Meadows
tipo: permanente
status: maduro
maturidade: 3
tags:
  - sistemas
  - produto
  - complexidade
  - arquitetura
relacionados:
  - "[[Produto é hipótese antes de ser solução]]"
  - "[[O sistema cresce pelo número de conexões, não pelo número de notas]]"
  - "[[A ordem das operações define se a IA amplifica ou substitui o pensamento]]"
---

# Sistemas simples sobrevivem, sistemas complexos travam

## 💡 Ideia central

Complexidade não é sinal de sofisticação — é dívida técnica e cognitiva acumulada. Sistemas simples falham de formas previsíveis e recuperáveis. Sistemas complexos falham de formas opacas e catastróficas. A sobrevivência de longo prazo favorece quem mantém a complexidade sob controle consciente.

---

## 📝 Desenvolvimento

Meadows descreve como sistemas ganham complexidade por acumulação: cada novo elemento resolve um problema local e cria dependências globais que não eram visíveis na hora. Com o tempo, o sistema tem tantas interações que ninguém mais consegue prever o comportamento emergente — não por falta de inteligência, mas porque a complexidade ultrapassou a capacidade cognitiva de qualquer indivíduo ou time.

O ponto mais importante: **complexidade não aumenta linearmente com o número de componentes — aumenta exponencialmente com o número de interações**. Um sistema com 10 componentes e 45 interações possíveis é drasticamente mais complexo do que um com 10 componentes e 10 interações. Adicionar um componente novo não acrescenta 1 — acrescenta N interações com tudo que já existe.

Para produtos de software, isso tem consequências diretas:

- **Cada feature nova não só adiciona valor — adiciona superfície de interação**. Uma feature que interage com 5 outras áreas do produto é mais cara de manter do que parece no momento do design.
- **Sistemas que cresceram para atender exceções são os mais frágeis**. O código que contém mais `if` especiais do que lógica geral é código que cresceu para sobreviver, não para escalar.
- **Simplicidade é uma decisão ativa, não um estado padrão**. Sem pressão consciente para simplificar, sistemas naturalmente acumulam complexidade. É a segunda lei da termodinâmica aplicada a software.

A consequência para gestão de produto: a pergunta certa antes de adicionar uma feature não é "isso gera valor?" — é "esse valor justifica a complexidade adicionada ao sistema?". Features que geram valor pequeno para segmentos pequenos, mas adicionam interações a todo o sistema, são candidatas a não existir.

---

## ⚔️ Tensões

**"Mas sistemas ricos em features servem mais usuários."**
Verdade até certo ponto — depois, a complexidade começa a degradar a experiência de todos. Produtos que tentam atender todos os casos de uso acabam fazendo tudo mal. Foco é escassez alocada conscientemente.

---

## 🔗 Conexões

- [[Produto é hipótese antes de ser solução]] — MVPs simples falham de forma ensinável; produtos complexos falham de forma opaca
- [[O sistema cresce pelo número de conexões, não pelo número de notas]] — a mesma lógica para o Zettelkasten
- [[Mapa - Produto e Startup]]
- [[Mapa - Zettelkasten]]

---

## ❓ Perguntas abertas

- Existe uma métrica de complexidade de produto que seja útil para PMs (além de métricas de código)?
- Como comunicar "não adicionar" como decisão de produto para stakeholders que medem progresso por features entregues?

---

## 📌 Referências

- Meadows, Donella. *Thinking in Systems*. Chelsea Green, 2008.
- Gall, John. *Systemantics*. 1975. — origem do princípio "um sistema complexo que funciona evoluiu de um sistema simples que funcionava"

---

*Criada: 2026-04-28 · Atualizada: 2026-05-03 · Maturidade: 3/5*
