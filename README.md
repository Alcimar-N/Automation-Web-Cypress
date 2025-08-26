# 💡O projeto

Este repositório foi desenvolvido com o objetivo de demonstrar como interagir com os principais elementos de uma página web e seguindo boas práticas de automação de testes End-to-End (E2E) utilizando o **Cypress**. A estrutura do projeto foi pensada para garantir **escalabilidade**, **legibilidade** e **facilidade de manutenção** usando boas práticas recomendadas pelo Cypress



---

## 1. Organização dos Testes

### 🧭Elementos da página
Os elementos foram organizados em uma única página, com nomes claro e seguindo a ordem de como aparecem na página, tornando o projeto mais limpo, claro e organizado.
Você pode encontrar esses elementos em:
```
cypress/support/locators/elements.js
```
### ▶️ Custom Commands
Todas as ações comuns, como preenchimento de formulários e interações específicas de UI, foram encapsuladas em **comandos customizados**.  
Isso evita a repetição de código e torna os testes mais limpos e fáceis de ler, pois uma única linha `cy.login()` é muito mais clara do que várias linhas de código. Por boas práticas, as ações, como clicar, preencher etc, devem ficar nos **comandos customizados** e as asserções no próprio teste em si, isso facilita a leitura do código, ao ver o teste, já sabe o que ele está validando, sem precisar ir até os commandos customizados.
Você pode encontrar esses comandos em:

```
cypress/support/commands/commands.js
```
### 📝 Nomeclatura Descritiva
Os arquivos de teste (`.cy.js`) e os blocos `describe` e `it` são nomeados de forma clara e descritiva, permitindo entender o propósito de cada teste apenas lendo seu título.
```
cypress/e2e/home.cy.js
```
---

## 2. Rodando os Testes

### 🔧 Instale as dependências do projeto:

```bash
npm install
```

### 🧪 Abra o Test Runner do Cypress

Para executar os testes de forma interativa, utilize:

```bash
npm run cy-open
```

Este comando abrirá a interface do Cypress, onde você poderá selecionar e ver os testes rodando em tempo real.

### ⚙️ Execute os testes via linha de comando (headless)

Ideal para uso em ambientes de **Integração Contínua (CI)**:

```bash
npm run cy-run
```