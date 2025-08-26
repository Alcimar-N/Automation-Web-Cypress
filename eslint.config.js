import eslintPluginCypress from 'eslint-plugin-cypress'; // Importa o plugin em si
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
  {
    files: ['cypress/**/*.js'], // Aplica esta configuração apenas aos arquivos JS dentro da pasta cypress
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        ...globals.browser, // Variáveis globais do navegador
        ...globals.es2021, // Variáveis globais ES2021
        ...eslintPluginCypress.configs.recommended.globals // Variáveis globais do Cypress via plugin
      }
    },
    plugins: {
      cypress: eslintPluginCypress // Registra o plugin do Cypress
    },
    rules: {
      // Adicione suas regras personalizadas aqui.
      // Você pode querer desativar algumas regras que conflitam com o Prettier
      // ou adicionar regras específicas para seus testes.
      'no-unused-vars': 'warn',

      // Regras específicas do Cypress (exemplo: evite usar `only` ou `skip` nos testes)
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/no-assigning-return-values': 'error',

      // Regras do plugin Prettier (garante que o Prettier seja executado pelo ESLint)
      'prettier/prettier': 'error'
    }
  },
  // Esta linha aplica as regras e configurações recomendadas do Prettier
  // e desativa as regras conflitantes do ESLint.
  prettierPlugin,
  // Para incluir as regras recomendadas do Cypress, você pode adicioná-las aqui também
  // como um objeto separado, pois `eslint-plugin-cypress` exporta as configs diretamente.
  eslintPluginCypress.configs.recommended // Adiciona as regras recomendadas do Cypress
];