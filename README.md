# AC Brasil | Website Institucional em React

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=0B1F3A)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsivo-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Scrum](https://img.shields.io/badge/Metodologia-Scrum-0A66C2?style=for-the-badge)
![Client Project](https://img.shields.io/badge/Projeto-Cliente_Real-FFC400?style=for-the-badge)

> 🎯 Projeto de cliente real desenvolvido em três fases: documentação e prototipação, MVP em HTML/CSS/JavaScript e entrega final em React com feedbacks incorporados.

Website institucional responsivo desenvolvido para a **Associação de Conselheiros do Brasil (AC Brasil)** como entrega final da disciplina de **Front-End Engineering**, no curso de **Engenharia de Software**.

- **Demo ao vivo:** `<link-demo>`
- **Cliente:** Associação de Conselheiros do Brasil (AC Brasil)
- **Disciplina:** Front-End Engineering
- **Equipe:** 7 integrantes
- **Meu papel:** Scrum Master & Desenvolvedor Frontend
- **Status:** entrega final em React, incorporando feedbacks do cliente

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Contexto do Cliente e da Disciplina](#contexto-do-cliente-e-da-disciplina)
- [Processo de Desenvolvimento](#processo-de-desenvolvimento)
- [Stack Tecnológica](#stack-tecnológica)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Repositório](#estrutura-do-repositório)
- [Como Rodar Localmente](#como-rodar-localmente)
- [Repositórios Relacionados](#repositórios-relacionados)
- [Equipe](#equipe)
- [Reflexão como Scrum Master](#reflexão-como-scrum-master)
- [Aprendizados e Destaques](#aprendizados-e-destaques)
- [Contato e LinkedIn](#contato-e-linkedin)
- [Agradecimentos](#agradecimentos)

## Sobre o Projeto

O projeto consiste em um website institucional moderno, responsivo e orientado a conteúdo para a **AC Brasil**, uma associação voltada a conselheiros, lideranças, profissionais, empresas, estudantes e pesquisadores interessados em governança corporativa no Brasil.

A proposta foi transformar necessidades reais do cliente em uma experiência digital clara, confiável e funcional. O site apresenta a instituição, comunica sua missão, facilita o contato com a equipe, organiza conteúdos institucionais e cria caminhos objetivos para pessoas interessadas em se associar.

Mais do que uma interface acadêmica, este projeto simula um ciclo profissional completo: descoberta, documentação, prototipação, MVP, apresentação ao cliente, coleta de feedback e evolução técnica para uma versão final em React.

## Contexto do Cliente e da Disciplina

Este projeto foi desenvolvido para a **Associação de Conselheiros do Brasil (AC Brasil)** como parte da disciplina de **Front-End Engineering**, dentro do curso de **Engenharia de Software** do **IBMEC**.

O desafio envolveu trabalhar com um cliente real, entender requisitos institucionais, lidar com restrições de marca, organizar entregas em equipe e evoluir a solução com base em feedbacks recebidos durante apresentações. A equipe foi composta por **7 pessoas**, com atuação distribuída entre pesquisa, documentação, prototipação, desenvolvimento, revisão visual, testes e gestão Scrum.

## Processo de Desenvolvimento

O desenvolvimento foi conduzido em **3 fases principais**, com foco em entrega iterativa, validação constante e melhoria contínua.

### 1. Documentação e Prototipação

Na primeira fase, a equipe trabalhou em um repositório separado dedicado à descoberta e ao planejamento do produto: `<repo-documentacao>`.

Principais entregas desta etapa:

- Levantamento de requisitos do cliente.
- Organização de necessidades, dores e objetivos da AC Brasil.
- Brainstorming de soluções e priorização de funcionalidades.
- Definição de roadmap e fases do projeto.
- Criação de protótipos no Figma.
- Planejamento das entregas e alinhamento do backlog.
- Registro das decisões de produto, navegação e identidade visual.

Essa fase foi essencial para reduzir ambiguidades, alinhar expectativas com o cliente e estabelecer uma base sólida antes de iniciar a implementação.

### 2. Primeiro Entregável: MVP Vanilla

Na segunda fase, a equipe desenvolveu um **MVP com HTML, CSS e JavaScript puro**, disponível no repositório: `<repo-vanilla>`.

Objetivos do MVP:

- Validar a arquitetura de informação.
- Apresentar uma primeira experiência navegável ao cliente.
- Testar hierarquia visual, conteúdos e chamadas para ação.
- Demonstrar fluxos principais, como contato, associação e acesso a conteúdos.
- Coletar feedbacks reais antes da versão final.

O MVP foi apresentado ao cliente e serviu como ponto de validação para ajustes de conteúdo, layout, usabilidade e prioridades funcionais.

### 3. Entrega Final: React + CSS

A terceira fase corresponde a este repositório. A versão final foi reconstruída com **React, CSS, Vite e React Router**, incorporando os feedbacks coletados na apresentação do MVP.

Melhorias aplicadas na entrega final:

- Componentização de seções reutilizáveis, cards, formulários, navegação e rodapé.
- Rotas organizadas para páginas institucionais, blog, artigos, webinars, cadastro, login e contato.
- Design responsivo para desktop, tablet e mobile.
- Integração com WordPress REST API para artigos e newsletters.
- Biblioteca de webinars e podcasts baseada em dados estruturados.
- Formulários com validação, estado de envio e notificações.
- Ajustes de acessibilidade, contraste e semântica para rotas públicas.
- Preparação para deploy com Vercel e fallback de rotas SPA.

## Stack Tecnológica

**Frontend**

- React 19
- React DOM
- React Router DOM
- CSS modularizado por página e componente
- Vite

**Dados e integrações**

- WordPress REST API para blog, artigos e newsletters.
- FormSubmit para envio de formulários.
- APIs públicas para indicadores econômicos, incluindo Banco Central e AwesomeAPI.
- Dados locais em JSON para webinars e podcasts.

**Qualidade e produtividade**

- ESLint
- Estrutura de componentes reutilizáveis
- Organização por páginas, componentes, hooks, dados e infraestrutura
- Build otimizado via Vite

**Metodologia**

- Scrum
- Backlog priorizado
- Entregas iterativas
- Validação com cliente
- Revisão e adaptação após feedback

## Funcionalidades

- Página inicial institucional com hero, chamadas para associação e conteúdos em destaque.
- Seção de indicadores econômicos com carregamento dinâmico.
- Página "Quem Somos" com apresentação institucional.
- Página de associados fundadores.
- Blog com separação entre **Artigos** e **Newsletter**.
- Busca, sugestões e paginação para conteúdos do blog.
- Página individual de artigo via rota dinâmica.
- Integração com WordPress REST API e cache local para melhorar a experiência de navegação.
- Biblioteca de webinars com thumbnails do YouTube.
- Área de podcasts com direcionamento para conteúdos externos.
- Formulário de contato com validação de campos.
- Formulário de cadastro para interessados em se associar.
- Formulário para receber avisos sobre novos webinars.
- Notificações de sucesso e erro por toast.
- Páginas de cadastro, login/entrada e contato.
- Links para documentos de privacidade e cookies.
- Navegação responsiva e componente de voltar ao topo.
- Layout adaptado para diferentes tamanhos de tela.
- Cuidados de acessibilidade, incluindo labels, estados, contraste e atributos ARIA em componentes interativos.

## Estrutura do Repositório

```text
.
|-- public/
|   |-- docs/
|   |   |-- politica-cookies.pdf
|   |   `-- politica-privacidade.pdf
|   |-- images/
|   `-- favicon.svg
|-- src/
|   |-- assets/
|   |   `-- images/
|   |-- components/
|   |   |-- BackToTop/
|   |   |-- BlogCard/
|   |   |-- Footer/
|   |   |-- Form/
|   |   |-- Hero/
|   |   |-- Indicadores/
|   |   |-- Nav/
|   |   |-- PodcastCard/
|   |   |-- Toast/
|   |   |-- UnderlineLink/
|   |   `-- WebinarsCard/
|   |-- constants/
|   |-- data/
|   |   |-- associados.json
|   |   |-- podcast.json
|   |   `-- webinars.json
|   |-- hooks/
|   |-- infrastructure/
|   |   `-- api/
|   |-- pages/
|   |   |-- Artigo/
|   |   |-- Blog/
|   |   |-- Cadastro/
|   |   |-- Contato/
|   |   |-- Entrar/
|   |   |-- Fundador/
|   |   |-- Home/
|   |   |-- Login/
|   |   |-- QuemSomos/
|   |   `-- Webinars/
|   |-- App.jsx
|   |-- main.jsx
|   |-- routes.jsx
|   `-- index.css
|-- PRODUCT.md
|-- package.json
|-- vite.config.js
`-- vercel.json
```

## Como Rodar Localmente

Clone o repositório e instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm start
```

O projeto ficará disponível em:

```text
http://localhost:5173
```

Scripts úteis:

```bash
npm run dev       # inicia o servidor Vite
npm run build     # gera a build de produção
npm run preview   # visualiza a build localmente
npm run lint      # executa a análise de lint
```

## Repositórios Relacionados

- Documentação, requisitos, roadmap, brainstorming e protótipos: [Documentação](https://github.com/luiz-divino/grupo3_pfe_2026.1)
- Primeiro MVP em HTML, CSS e JavaScript: [MVP Vanilla](https://github.com/Damascenopog/grupo3_pfe_2026.1-code)
- Entrega final em React: este repositório: [Ac Brasil Website](https://grupo3-pfe-web-2026-1.vercel.app/)

## Equipe

- **`<Luiz Fernando Silva Divino>` - Scrum Master & Desenvolvedor**
- `<Vinícius Machado>` - `<Desenvolvedor>`
- `<Antonio Damasceno>` - `<Desenvolvedor>`
- `<Arhur Calebe>` - `<Desenvolvedor>`
- `<João Pedro Parente>` - `<Desenvolvedor>`
- `<Pedro Henrique Becker>` - `<Desenvolvedor>`
- `<Pedro Soares>` - `<Desenvolvedor>`

## Contato e LinkedIn

| Integrante | LinkedIn | Portfólio / GitHub |
| --- | --- | --- |
| `<Luiz Fernando>` | [LinkedIn](https://www.linkedin.com/in/luizsdivino) | [GitHub](https://github.com/luiz-divino) |
| `<Vinícius Machado>` | [LinkedIn](https://www.linkedin.com/in/vin%C3%ADcius-machado-384946216/) | [GitHub](https://github.com/viniciusmlima) |
| `<Antonio Damasceno>` | [LinkedIn](https://www.linkedin.com/in/antoniodamasceno01/) | [GitHub](https://github.com/Damascenopog) |
| `<Arthur Calebe>` | [LinkedIn](https://www.linkedin.com/in/arthur-calebe-a411b9319/) | [GitHub](https://github.com/Arthur-Calebe) |
| `<João Pedro Parente>` | [LinkedIn](https://www.linkedin.com/in/jo%Clinkedin-5) | [GitHub](https://github.com/jpedro1501) |
| `<João Pedro Parente>` | [LinkedIn](https://www.linkedin.com/in/jo%Clinkedin-linkedin-6) | [GitHub](https://github.com/jpedro150) |
| `<Pedro Henrique Becker>` | [LinkedIn](https://www.linkedin.com/in/pedro-henrique-beckerlinkedin-7) | [GitHub](https://github.com/Pbecker08) |
| `<Pedro Soares>` | [LinkedIn](https://www.linkedin.com/in/pedro-henrique-beckerlinkedin-7) | [GitHub](https://github.com/Pedro-Nunes22) |

## Reflexão como Scrum Master

Atuando como **Scrum Master & Desenvolvedor Frontend**, facilitei a organização do time ao longo das fases do projeto, apoiei a condução de cerimônias, acompanhei impedimentos e ajudei a manter o foco na entrega de valor ao cliente. Meu papel envolveu equilibrar comunicação, priorização e execução técnica, garantindo que os feedbacks recebidos fossem transformados em melhorias concretas na versão final.

## Aprendizados e Destaques

- Experiência com um cliente real, incluindo entendimento de expectativas, apresentação de entregas e incorporação de feedback.
- Evolução de um projeto desde a documentação e prototipação até uma aplicação final em React.
- Prática de componentização, organização de rotas e separação de responsabilidades.
- Desenvolvimento de formulários com validação, envio e feedback visual ao usuário.
- Consumo de APIs externas e tratamento de estados de carregamento, erro e fallback.
- Ajustes de responsividade e acessibilidade para uma experiência mais inclusiva.
- Fortalecimento de habilidades de comunicação, colaboração, gestão de tempo e liderança servidora.
- Aplicação de Scrum em um contexto acadêmico com dinâmica próxima a um projeto profissional.


## Agradecimentos

Agradecemos à **Associação de Conselheiros do Brasil (AC Brasil)** pela oportunidade de trabalhar em um desafio com contexto real, ao(a) professor(a) **`<nome-do-professor>`** pela orientação durante a disciplina e à **`<nome-da-universidade>`** pelo ambiente de aprendizagem, colaboração e desenvolvimento profissional.

---

Desenvolvido por uma equipe de estudantes de Engenharia de Software, com foco em qualidade, colaboração e entrega de valor para um cliente real.
