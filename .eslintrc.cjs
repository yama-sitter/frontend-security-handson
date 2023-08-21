module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  ignorePatterns: ['.eslintrc.cs'],
  parserOptions: {
    sourceType: 'module',
  },
};
