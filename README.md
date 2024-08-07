# template-nuxt-eslint-prettier

This repository uses PNPM for development.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Setup and Configuration

### Install dependencies

```bash
pnpm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier typescript @typescript-eslint/parser @nuxtjs/eslint-config-typescript
```

### ".eslintrc.cjs" file

```bash
//projectName/.eslintrc.cjs

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
```

### ".prettierignore" file

```bash
#projectName/.prettierignore

node_modules
*.log*
.nuxt
.nitro
.cache
.output
.env
dist

#Ignore prettier rules in files of a specific directory
components/ui/
```

### ".prettierrc" file

Modify the file "projectName/.prettierrc"

```bash
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "printWidth": 95,
}
```

### "setting.json" file in VSCode editor

```bash
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.requireConfig": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  }
}
```

### Tailwind CSS for Nuxt

```bash
npm install -D @nuxtjs/tailwindcss
```

```bash
//nuxt.config.ts

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})
```

### Automatic Class Sorting with Prettier

```bash
pnpm i -D prettier prettier-plugin-tailwindcss
```

Modify the file "projectName/.prettierrc"

```bash
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### References

- [Adding ESLint and Prettier to Nuxt 3](https://dev.to/tao/adding-eslint-and-prettier-to-nuxt-3-2023-5bg)
- [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/getting-started/installation)
- [Automatic Class Sorting with Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
