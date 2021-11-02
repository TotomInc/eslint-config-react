'use strict';

module.exports = {
  parser: 'babel-eslint',

  ignorePatterns: ['node_modules/', 'coverage/', 'dist/'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },

    jest: {
      version: 'detect',
    },
  },

  rules: {
    'react/jsx-uses-vars': 'warn',
    'react/jsx-uses-react': 'warn',
  },
};
