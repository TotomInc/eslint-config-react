'use strict';

// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
const restrictedGlobals = require('confusing-browser-globals');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [require.resolve('./base')],

  plugins: ['eslint-comments', 'jsx-a11y', 'prettier'],

  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',

    'airbnb',
    'airbnb/hooks',

    'plugin:jsx-a11y/recommended',

    'eslint:recommended',

    'plugin:prettier/recommended',
  ],

  overrides: [
    {
      files: ['**/*.ts?(x)'],

      parser: '@typescript-eslint/parser',

      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
        project: ['./tsconfig.json'],
      },

      plugins: ['@typescript-eslint', 'eslint-comments', 'jsx-a11y', 'prettier'],

      extends: [
        'plugin:eslint-comments/recommended',
        'plugin:promise/recommended',

        'airbnb-typescript',
        'airbnb/hooks',

        'plugin:jsx-a11y/recommended',

        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',

        'plugin:prettier/recommended',
      ],

      rules: {
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust
        'default-case': 'off',
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
        'no-dupe-class-members': 'off',
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
        'no-undef': 'off',

        'import/prefer-default-export': 'off',

        // Add TypeScript specific rules (and turn off ESLint equivalents)
        '@typescript-eslint/consistent-type-assertions': 'warn',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'warn',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',
      },
    },
  ],

  // NOTE: When adding rules here, you need to make sure they are compatible with
  // `typescript-eslint`, as some rules such as `no-array-constructor` aren't compatible.
  rules: {
    'import/prefer-default-export': 'off',

    // Deprecated rule from jsx-a11y
    'jsx-a11y/accessible-emoji': 'off',

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

    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'prefer-destructuring': 'off',
  },
};