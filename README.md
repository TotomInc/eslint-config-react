# `@totominc/eslint-config-react`

## About this configuration

- `eslint:recommended`: recommended ESLint rules.
- `eslint-airbnb` + `eslint-airbnb-typescript`: based on the Airbnb code-styleguide both TypeScript, with adaptations for React projects.
- `eslint-jsx-a11y`: enforce a11y best-practices.
- `eslint-react-hooks`: rules to help you enforce [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html) and avoid common issues.
- `eslint-comments`: better control over ESLint comments to avoid ESLint comments disable abuse.
- `eslint-unicorn`: some more powerful and stricter rules for JavaScript.
- `eslint-promise`: enforce best-practices around JS promises.
- `eslint-jest`: enforce best-practices when writing unit-tests with `Jest`.
- `prettier`: an opinionated code-styleguide which is pre-configured. It is possible to overwrite this for your personal preference.
- `prettier-plugin-tailwindcss`: a Prettier plugin for TailwindCSS v3.0+ that automatically sorts classes based on [their recommended class order](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted).
- Some extra stuff such as lintint JSON and YML files.

## Installation

In order to work around [a known limitation in ESLint](https://github.com/eslint/eslint/issues/3458), we recommend you to use `@rushstack/eslint-patch` so that you don't have to manage ESLint dependencies by yourself.

```bash
npm i --save-dev @totominc/eslint-config-react @rushstack/eslint-patch prettier eslint
```

## Usage

Create an `.eslintrc.js` file at the root of your project and add the following configuration:

  ```js
  require("@rushstack/eslint-patch/modern-module-resolution");

  module.exports = {
    root: true,
    extends: ['@totominc/react'],
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.json'],
    },
  };
  ```

### Jest & Testing-Library support

If your project contains unit-tests written with Jest and Testing-Library (for React), you can extend the ESLint config by doing the following:

```js
module.exports = {
  extends: ['@totominc/react', '@totominc/react/jest'],
};
```

Jest ESLint rules will only applies on the test files matching `**/__tests__/**/*` and `**/*.{spec,test}.*`.

### Next.js support

For Next.js project, we also provide a custom ESLint config which you can extend by doing the following:

```jsonc
// .eslintrc.json
{
  "extends": "@totominc/react/next",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## FAQ

### I want to register custom path aliases

```bash
# Install ESLint plugin to resolve alias imports.
npm i --save-dev eslint-import-resolver-alias
```

```javascript
module.exports = {
  settings: {
    // Register `@/` as an import alias to `src/**/*`.
    "import/resolver": {
      alias: {
        map: [['@', './src/']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
```

### I have multiple `tsconfig.json` files

```javascript
module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './tsconfig.web.json'],
  },
};
```

However, if you have multiple `tsconfig.json` files, we recommend you to create a dedicated `tsconfig.json` file for ESLint such as `tsconfig.eslint.json`:

- https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/parser/README.md#parseroptionsproject
- https://github.com/typescript-eslint/typescript-eslint/blob/main/tsconfig.eslint.json
- https://typescript-eslint.io/docs/linting/monorepo/#one-root-tsconfigjson

### I am getting error "The file must be included in at least one of the projects provided"

Please follow this explanation from [the official @typescript-eslint documentation](https://typescript-eslint.io/docs/linting/type-linting/#i-get-errors-telling-me-the-file-must-be-included-in-at-least-one-of-the-projects-provided).

## License

MIT license, please see the LICENSE file in this project.
