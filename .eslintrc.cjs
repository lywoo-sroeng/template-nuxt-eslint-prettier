module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],

  // Ignore eslint rules in file(s) of a specific directory
  ignorePatterns: ['components/ui/', 'tailwind.config.js'],

  rules: {
    'no-lonely-if': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 0,
    '@typescript-eslint/consistent-type-imports': 'error',
    'prettier/prettier': ['error', { printWidth: 95 }],
  },
}