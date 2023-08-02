// This is a patch so that eslint will load the plugins as dependencies.
require('@rushstack/eslint-patch/modern-module-resolution');
const baseRules = require('./rules/common');

module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true
  },
  rules: {
    ...baseRules
  },
  plugins: ['html', 'react', 'react-hooks']
};
