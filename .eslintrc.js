module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/this-in-template': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: [
          'default',
          'index',
          'join',
          'career',
          'policy',
          'Loader',
          'Tab',
          'Modal',
          'admin',
        ],
      },
    ],
  },
}
