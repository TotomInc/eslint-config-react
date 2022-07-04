require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: ['../index'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
