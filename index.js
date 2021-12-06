'use strict';

// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
const restrictedGlobals = require('confusing-browser-globals');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],

  parser: '@typescript-eslint/parser',

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  rules: {
    // Prefer to use named exports instead of default exports.
    'import/prefer-default-export': 'off',

    // Prefer arrow-function when defining a React functional component.
    'react/function-component-definition': [2, { "namedComponents": "arrow-function" }],

    // Disable no props spreading React rule, as it's a common pattern in React
    // that can be used for very specific cases (e.g. atomic UI components).
    'react/jsx-props-no-spreading': 'off',

    // Custom prettier config.
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        endOfLine: 'lf',
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 120,
        proseWrap: 'never',
        quoteProps: 'consistent',
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
        vueIndentScriptAndStyle: false,
      },
    ],

    // Do not force destructuring.
    'prefer-destructuring': 'off',

    // Avoid confusing globals.
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
  },
};