const restrictedGlobals = require("confusing-browser-globals");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  extends: [
    "eslint:recommended",

    "plugin:eslint-comments/recommended",
    "plugin:unicorn/recommended",
    "plugin:promise/recommended",
    "plugin:jsx-a11y/recommended",

    "airbnb",
    "airbnb-typescript",

    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",

    "./extra",
  ],

  settings: {
    // Register `@/` as an import alias to `src/**/*`.
    "import/resolver": {
      alias: {
        map: [['@', './src/']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  overrides: [
    // Custom overrides for Cypress.
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}", "**/tests/e2e/**/*.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],

  rules: {
    // Prefer to use named exports instead of default exports.
    "import/prefer-default-export": "off",

    // Prefer arrow-function when defining a React functional component.
    "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],

    // Disable no props spreading React rule, as it"s a common pattern in React
    // that can be used for very specific cases (e.g. atomic UI components).
    "react/jsx-props-no-spreading": "off",

    // Not needed since React v17.
    "react/jsx-uses-react": "off",

    // Honestly we don't use prop-types since we migrated to TypeScript.
    "react/prop-types": "off",

    // Not needed since React v17.
    "react/react-in-jsx-scope": "off",

    // Enable prettier rules.
    "prettier/prettier": "error",

    "promise/always-return": "warn",

    // We can have some specific file-naming convention with React projects.
    "unicorn/filename-case": "off",

    // Let me use this syntax.
    "unicorn/no-array-for-each": "off",

    // We prefer to use null instead of undefined when a variable is meant to contain a value later.
    "unicorn/no-null": "off",

    // Conflict with anything that is TypeScript related, especially `env.d.ts`.
    "unicorn/prevent-abbreviations": "off",

    // Do not force destructuring.
    "prefer-destructuring": "off",

    // Avoid confusing globals.
    "no-restricted-globals": ["error"].concat(restrictedGlobals),
  },
};