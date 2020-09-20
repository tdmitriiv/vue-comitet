const path = require('path');

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 8,
    sourceType: 'module'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'vue',
    'jsdoc'
  ],
  rules: {
    'class-methods-use-this': 'off',
    'max-len': ['warn',  { 'code': 100 }],
    'jsdoc/require-returns': 'off',
    'jsdoc/require-param-type': 'off',
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'build','webpack.config.ts')
      }
    }
  },
}
