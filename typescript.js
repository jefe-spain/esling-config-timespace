require('@rushstack/eslint-patch/modern-module-resolution');
const common = require('./rules/common');
const typescript = require('./rules/typescript');
const react = require('./rules/react');
const imports = require('./rules/import');
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
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        'react/require-default-props': 'off'
      }
    }
  ],
  rules: {
    ...common,
    ...typescript,
    ...react,
    ...imports,
    ...prettier
  }
};
