/// <reference types="cypress" />
import { locators } from '../support/locators/elements';

describe.skip(
  'Página Home',
  {
    env: {
      describeVar: 'essa é a variável do describe',
    },
  },
  () => {
    /*  it.skip('', () => {});
  it('visita pagina usando variavel de ambiente', () => {
    cy.visit(Cypress.env('host')); //usando variável de ambiente
    cy.contains('Why Cypress?').should('exist');
  }); */

    it('ver a variável', () => {
      cy.log(Cypress.env('variavel'));
      cy.log(Cypress.env('envVar'));
      cy.log(Cypress.env('describeVar'));
      cy.log(Cypress.env('itvar'));
    });

    it(
      'variável',
      {
        env: {
          itVar: 'essa é a variável do it',
        },
      },
      () => {
        cy.log(Cypress.env('itVar'));
      },
    );

    it('', () => {});
  },
);

describe('validações dos elementos da página', () => {
  beforeEach(() => {
    //executa antes de cada teste
    cy.visit('https://testautomationpractice.blogspot.com/');
  });

  it('Valida o textBox', () => {
    cy.TextBox();
    cy.get(locators.textBox).should('have.attr', 'placeholder', 'Enter Name'); //verifica se tem o atributo com o nome específico
    cy.get(locators.textBox).should('have.value', 'Sr Teste'); //verifica se o campo tem o texto Sr Teste
  });

  it('Valida o radioButton', () => {
    cy.RadioButton();
    cy.get(locators.radioButton).should('be.checked'); //verifica se o checkBox está marcado
  });

  it('Valida o checkBox', () => {
    cy.CheckBox(); //chama o comando
    cy.get(locators.checkBoxSunday).should('be.checked'); // verifica se o checkBox está marcado
    cy.get(locators.checkBoxTuesday).should('be.checked'); // verifica se o checkBox está marcado
    cy.get(locators.checkBoxWednesday).should('not.be.checked'); // verifica se o checkBox está desmarcado
    cy.get(locators.checkBoxDays).should('have.length', '7'); // verifica se possui 7 elementos
  });

  it('Valida o selectBox Country', () => {
    cy.SelectBoxCountry();
    cy.get(locators.selectBoxCountry).should('contain.text', 'Brazil'); // verifica o texto do elemento
    cy.get(locators.selectBoxCountry).should('have.value', 'brazil'); // verifica o elemento tem o valor
  });

  it('Valida o selectBox Color', () => {
    cy.SelectBoxColor();
    cy.get(locators.selectColor).should('contain.text', 'Red'); // verifica o texto do elemento
    cy.get(locators.selectColorRed).should('have.value', 'red'); // verifica o elemento tem o valor
    //cy.screenshot('validação'); tira print da tela
  });

  it.skip('Deve ser capaz de fazer o upload de um arquivo e mostrar o nome do arquivo', () => {
    // Carregue o arquivo de teste da pasta 'fixtures'.
    cy.fixture('example.json').then((fileContent) => {
      // Obtenha o campo de input de arquivo e faça o upload.
      cy.get('#singleFileInput').attachFile({
        fileContent: fileContent.toString(),
        fileName: 'example.json',
        mimeType: 'text/plain',
      });
    });

    // Valide se o nome do arquivo aparece ao lado do botão.
    // O seletor para o texto "Nenhum arquivo escolhido" provavelmente mudará.
    // Você precisará inspecionar o elemento para encontrar o seletor correto.
    cy.get('#singleFileInput').should('contain', 'example.json');
  });

  it('Valida Static Web Table', () => {
    cy.BookTable();
    cy.get(locators.staticTable).should('have.length', '7'); // valida quantidade de linha da tabela <tr>
    cy.get(locators.tableTitle).eq(0).should('have.text', 'BookName'); //valida o título da tabela
    cy.get(locators.tableTitle).eq(1).should('have.text', 'Author');
    cy.get(locators.tableTitle).eq(2).should('have.text', 'Subject');
    cy.get(locators.tableTitle).eq(3).should('have.text', 'Price');
  });

  it('Valida botão dinâmico', () => {
    cy.DynamicButtonStart();
    cy.get(locators.dinamicButtonStart).should('have.text', 'START'); //valida botão dinâmico
    cy.get(locators.dinamicButtonStart).click();
    cy.DynamicButtonStop();
    cy.get(locators.dinamicButtonStop).should('have.text', 'STOP');
  });
});
