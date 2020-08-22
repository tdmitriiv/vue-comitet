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
    'class-methods-use-this': 'off'
  }
}
