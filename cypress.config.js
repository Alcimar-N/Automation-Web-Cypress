import { defineConfig } from 'cypress';
import { allureCypress } from 'allure-cypress/reporter';

export default defineConfig({
  e2e: {
    env: { variavel: 'isso é o valor da váriável no arquivo cypress.config.js' },
    video: true, //grava video automaticamente em modo headless (npx cypress run)
    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    },
    experimentalStudio: true, //serve para gerar testes
    baseUrl: 'https://demoqa.com/text-box',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
