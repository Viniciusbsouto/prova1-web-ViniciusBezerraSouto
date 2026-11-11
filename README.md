# 🎓 Avaliação: Programação Web — 2026.2

**Professor(a):** Thiago Soares Marques | **Universidade Estadual da Paraíba (UEPB)** |
**Duração:** 2 horas | **Valor:** 8,0 pontos (os outros 2,0 vêm da lista de exercícios)

---

## ⚠️ Instruções Iniciais (Leia com Atenção)

1.  **Configuração do Repositório:**
    * Acesse o link do template fornecido no quadro.
    * Clique no botão verde **"Use this template"** > **"Create a new repository"**.
    * Nomeie o repositório como: `prova1-web-SEUNOMECOMPLETO` (Ex: `prova1-web-thiago-marques`).
    * **IMPORTANTE:** Defina a visibilidade como **🔒 PRIVATE** (Privado).
    * Após criar, vá em **Settings > Collaborators > Add people** e adicione o usuário do professor: `thiagomarques-uepb`.

2.  **Ambiente de Desenvolvimento:**
    * No seu novo repositório, clique no botão verde **< > Code**.
    * Vá na aba **Codespaces**.
    * Clique em **Create codespace on main**.
    * **Aguarde!** O terminal abrirá e instalará as dependências automaticamente (`npm install`). Isso leva cerca de 2 minutos.
    * Quando o terminal parar, digite: `npm run dev`.

3.  **Regras:**
    * A prova é **individual**. Você pode executar e testar o código à vontade.
    * **Não** é permitido consultar sites, materiais ou ferramentas de IA (inclusive o Copilot do Codespaces).

4.  **Entrega:**
    * A entrega será validada pelo **último commit** feito antes do horário limite.
    * Não esqueça de fazer o `git add .`, `git commit -m "COMENTARIO"` e `git push` das suas alterações.
    * Copie a URL do seu repositório (Ex: `github.com/joao/prova1-web-joao`).
    * Envie este link pela tarefa no **SUAP**.

---

## 📝 Parte 1: Teoria e Conceitos (1,0 Ponto)

*Abra o arquivo `RESPOSTAS.md` na raiz do projeto e responda às questões abaixo:*

**Questão 1 (HTML Semântico):**
* **Pergunta (0,3 pt):** Cite três elementos semânticos do HTML5 e explique dois benefícios concretos de usá-los no lugar de `<div>`. Pense em quem acessa a página e em quem mantém o código.

**Questão 2 (Variáveis em JavaScript):**
* **Pergunta (0,3 pt):** Explique a diferença entre `let` e `const` quanto a escopo e reatribuição. Por que `const lista = []` ainda permite fazer `lista.push(1)`?

**Questão 3 (Estado no React):**
* **Pergunta (0,4 pt):** Por que usamos `useState` em vez de uma variável comum (`let`) para dados que aparecem na tela? E por que, para adicionar um item a um estado do tipo array, **não** devemos fazer `itens.push(novo)` seguido de `setItens(itens)`?

---

## 🛠️ Parte 2: HTML, CSS e JavaScript (3,0 Pontos)

**Instruções:**
Dentro da pasta `public` do projeto já existe a pasta `divisor-conta`. Crie nela os arquivos `index.html`, `style.css` e `script.js`.

**Enunciado da Questão:**
Crie uma calculadora para dividir a conta de um restaurante. O usuário informa o valor da conta, o número de pessoas e a gorjeta, e a página mostra quanto cada um paga.

**Requisitos:**

1.  **HTML (`index.html`) (1,25 pt):**
    * Monte a estrutura semântica: `<header>` com o título `<h1>`, `<main>` com o formulário e `<footer>`. Importe `style.css`, e coloque `script.js` no final do `<body>`.
    * Crie um `<form id="form-conta">` com: um campo numérico `#total` (aceitando centavos), um campo numérico `#pessoas` e um `<select id="gorjeta">` com as opções Sem gorjeta (`0`), 10% (`10`) e 15% (`15`). Cada campo deve ter seu `<label>`. Inclua um botão de envio, um `<p id="erro">` e um `<p id="resultado">`.
    * **Dica:** para o campo de gorjeta, use o `<select>` abaixo. Cada `<option>` é uma escolha da lista; o `value` é o que o JavaScript lê com `.value`, como em um `<input>`, e o texto entre as tags é o que o usuário vê.

    ```html
    <select id="gorjeta">
      <option value="0">Sem gorjeta</option>
      <option value="10">10%</option>
      <option value="15">15%</option>
    </select>
    ```

2.  **CSS (`estilo.css`) (0,5 pt):**
    * Centralize o conteúdo com Flexbox, em coluna, com largura máxima de `400px`.
    * Os campos numéricos ficam com `120px` de largura.

3.  **JavaScript (`script.js`) (1,25 pts):**
    * Trate o evento `submit` do formulário sem recarregar a página e leia os três valores convertendo-os para número.
    * **Validação:** se o valor da conta estiver vazio ou for ≤ 0, ou se o número de pessoas não for um inteiro maior ou igual a 1, mostre uma mensagem em `#erro` (**sem** `alert`), limpe `#resultado` e não calcule nada.
    * Escreva uma função `calcularDivisao(total, pessoas, percentual)` que devolve um objeto `{ gorjeta, totalComGorjeta, porPessoa }`. Ao chamá-la, obtenha os três valores por **desestruturação**.
    * Mostre em `#resultado`, com template literal, `Gorjeta: R$ 15,00 - Total: R$ 165,00 - Por pessoa: R$ 55,00`.

---

## 🚀 Parte 3: React e Next.js (4,0 Pontos)

*Objetivo: Criar a "Biblioteca do Campus", uma vitrine de livros em que o aluno pode reservar até **3 livros**, utilizando componentes, props, CSS Modules e estado.*

**Arquivos de Trabalho:**
* `src/app/page.js` (Lógica principal)
* `src/app/page.module.css` (Estilos da página)
* `src/app/layout.js` (Layout compartilhado)
* `src/app/sobre/page.js` (Nova página)
* `src/components/Navbar.js` (Novo componente)
* `src/components/CardLivro.js` e `src/components/CardLivro.module.css` (Novo componente)

**Cenário:**
Copie e cole a seguinte lista de dados dentro do seu arquivo `page.js` (antes da função principal):

```javascript
const livros = [
  { id: 1, titulo: "Eloquent JavaScript", autor: "Marijn Haverbeke", disponivel: true },
  { id: 2, titulo: "Código Limpo", autor: "Robert C. Martin", disponivel: false },
  { id: 3, titulo: "Entendendo Algoritmos", autor: "Aditya Bhargava", disponivel: true },
  { id: 4, titulo: "Projeto de Algoritmos", autor: "Nivio Ziviani", disponivel: true },
  { id: 5, titulo: "O Programador Pragmático", autor: "Andrew Hunt e David Thomas", disponivel: true },
];
```

> ⚠️ **Atenção:** o array `livros` é **somente leitura**. Em nenhum momento ele deve ser alterado: não adicione, remova ou edite livros nele, nem mude o campo `disponivel`. Reservar e cancelar mexem **apenas** no estado `reservas`, adicionando ou removendo livros dele. Para saber se um livro está reservado, verifique se o `id` dele está em `reservas`.

**Requisitos da Implementação:**

1.  **Navegação (0,5 pt):**
    * Crie o componente `<Navbar />` com `<Link>` do Next.js para Início (`/`) e Sobre (`/sobre`).
    * Crie a página `/sobre` com um parágrafo simples.
    * Coloque a `<Navbar />` no `layout.js`, para que apareça nas duas páginas.

2.  **Componente com Props (0,5 pt):**
    * Crie o componente `<CardLivro />` no arquivo `src/components/CardLivro.js`. Ele recebe estas props:

    | Prop | Tipo | O que é |
    | --- | --- | --- |
    | `livro` | objeto | Um item do array `livros` |
    | `reservado` | booleano | `true` se o livro já está nas reservas |
    | `limiteAtingido` | booleano | `true` se já existem 3 reservas |
    | `onReservar` | função | Chamada com o livro quando o usuário clica em "Reservar" |

    * Na página, o uso fica assim: `<CardLivro livro={...} reservado={...} limiteAtingido={...} onReservar={...} />`.
    * O card é um `<article>` com, de cima para baixo: o **título** em `<h3>`, o **autor** em `<p>` e, por último, a **área de ação** (botão ou texto), descrita no item 5.

    ```
    ┌─────────────────────────────┐
    │ Eloquent JavaScript         │  ← <h3> título
    │ Marijn Haverbeke            │  ← <p> autor
    │ [ Reservar ]                │  ← área de ação
    └─────────────────────────────┘
    ```

3.  **Renderização de Listas e CSS Modules (1,0 pt):**
    * Renderize os cards com `.map()`, aplicando a propriedade `key`.
    * Com CSS Modules, use `display: flex` e `flex-wrap: wrap` no container e estilize os cards.

4.  **Gerenciamento de Estado (1,0 pt):**
    * Crie com `useState` um array `reservas` com os livros reservados.
    * Reservar acrescenta o livro utilizando o operador spread (`...`); o botão "Cancelar" remove com `filter`.
    * **Não** use `push`, `splice` ou atribuição direta no estado.
    * A página fica nesta ordem, de cima para baixo: o título `<h1>Biblioteca do Campus</h1>`; a área de reservas, com o contador `Reservas (N/3)` em `<h2>` e uma `<ul>` com os títulos reservados, cada um com seu botão "Cancelar"; e, por último, a grade de cards.

5.  **Renderização Condicional (1,0 pt):**
    * A área de ação do card (última linha) mostra **apenas uma** destas opções, conferidas nesta ordem:

    | Situação do livro | O que aparece na área de ação |
    | --- | --- |
    | `disponivel` é `false` | O texto `<p>Emprestado</p>`, sem botão |
    | Disponível e já reservado | O texto `<p>Reservado</p>`, sem botão |
    | Disponível e não reservado | O botão `<button>Reservar</button>`, que chama `onReservar(livro)` ao ser clicado |

    * Quando houver 3 reservas, os botões "Reservar" ficam **desabilitados** (atributo `disabled`) e a mensagem `<p>Limite de 3 reservas atingido</p>` aparece na área de reservas, logo abaixo do contador (não dentro dos cards).
    * **Dica:** use o operador ternário (`condicao ? verdadeiro : falso`) para escolher o que mostrar.

---
**Boa Prova!**
