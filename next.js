'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [require.resolve('./index'), 'plugin:@next/next/recommended'],
};
