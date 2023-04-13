module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['files/transformed/by/babel/*.js'],
      parser: '@babel/eslint-parser',
    },
  ],
  plugins: ['prettier'],
};
