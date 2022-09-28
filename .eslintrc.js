/* eslint-disable prettier/prettier */
module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 13,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint','prettier'],
    rules: {
      'prettier/prettier': 2,
      quotes: ['error', 'single'],
      'no-console': 1,
      'no-var': 'error',
      '@typescript-eslint/no-var-requires': 0,
      'prefer-const': 'error',
    },
  };