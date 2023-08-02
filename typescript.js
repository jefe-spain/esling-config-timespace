require('@rushstack/eslint-patch/modern-module-resolution');
const common = require('./rules/common');
const typescript = require('./rules/typescript');
const imports = require('./rules/import');

module.exports = {
  globals: {
    React: true,
    JSX: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  root: true,
  rules: {
    ...common,
    ...typescript,
    ...imports
  }
};
