'use strict';

module.exports = {
  plugins: ['jest', 'testing-library'],

  extends: [
    'plugin:jest/all',
    'plugin:testing-library/react',
  ],

  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],

      env: {
        'jest/globals': true,
      },
    },
    {
      files: ['**/__tests__/**/*.{ts,tsx}', '**/*.{spec,test}.{ts,tsx}'],

      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
};
