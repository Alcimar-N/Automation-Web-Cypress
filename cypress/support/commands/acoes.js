import { locators } from '../locators/elements';
// os arquivos de açoes devem ser importados em cypress/suport/e2e.js
//Cypress.Commands.add('Nomde do teste', () => { código aqui }); exemplo de teste
Cypress.Commands.add('TextBox', () => {
  cy.get(locators.textBox).type('Sr Teste');
  cy.get(locators.radioButton).check();
});
Cypress.Commands.add('RadioButton', () => {
  cy.get(locators.radioButton).check();
});
Cypress.Commands.add('CheckBox', () => {
  cy.get(locators.checkBoxSunday).check();
  cy.get(locators.checkBoxTuesday).check();
});

Cypress.Commands.add('SelectBoxCountry', () => {
  cy.get(locators.selectBoxCountry).select('Brazil');
});

Cypress.Commands.add('SelectBoxColor', () => {
  cy.get(locators.selectColor).select('Red');
});

Cypress.Commands.add('BookTable', () => {
  cy.get(locators.staticTable);
  cy.get(locators.tableTitle);
});

Cypress.Commands.add('DynamicButtonStart', () => {
  cy.get(locators.dinamicButtonStart);
});

Cypress.Commands.add('DynamicButtonStop', () => {
  cy.get(locators.dinamicButtonStop);
});
