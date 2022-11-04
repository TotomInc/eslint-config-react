'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',

    'plugin:eslint-comments/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',

    'airbnb',
    'airbnb-typescript',

    // Includes jsx-a11y, react, react-hooks.
    // A lot of custom rules for Next.js as well.
    'next/core-web-vitals',

    'plugin:prettier/recommended',
  ],
};
