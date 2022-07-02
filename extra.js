// Based off: https://github.com/TotomInc/eslint-config-vue/blob/master/extra.js

/** @type {import('eslint').Linter.Config} */
module.exports = {
  // Files patterns that should be ignored.
  ignorePatterns: [
    "dist",
    "output",
    "coverage",
    "public",
    "temp",
    "tmp",
    "yarn.lock",
    "pnpm-lock.yaml",
    "package-lock.json",
    "tsconfig.json",
    "tsconfig.*.json",
    ".eslintrc.js",
    "*.d.ts",
    '!.github',
    '!.vscode',
  ],

  extends: [
    // Various linters for other languages.
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:yml/standard",
  ],

  overrides: [
    // Custom overrides for JSON.
    {
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
    },
    // Custom overrides for package.json.
    {
      files: ["package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: [
              'types',
              'require',
              'import',
            ],
          },
        ],
      },
    },
    // Custom overrides for YML.
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
    },
  ],
};
