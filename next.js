require('@rushstack/eslint-patch/modern-module-resolution');
const common = require('./rules/common');
const typescript = require('./rules/typescript');
const imports = require('./rules/import');
const react = require('./rules/react');
const prettier = require('./rules/prettier');

module.exports = {
  globals: {
    React: true,
    JSX: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
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
    ...react,
    ...prettier,
    ...imports
  }
};
