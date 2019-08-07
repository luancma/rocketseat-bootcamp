## Terceiro módulo bootcamp rocketseat


### Configurações dos arquivos eslint, prettier e sequelize
#### .prettier 

{
  "singleQuote": true,
  "trailingComma": "es5"
}
`
#### .eslint 

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb', 'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react', 'prettier'
  ],
  rules: {
    "prettier/prettier":"error",
    "class-methods-use-this":"off",
    "no-param-reassign":"off",
    "camelcase":"off",
    "no-unused-vars":["error", { "argsIgnorePattern": "next" }],
  
  },
};


#### .sequelize

const { resolve } = require('path');

module.exports = {
  config: resolve(__dirname, 'src', 'config', 'database.js'),
  'models-path': resolve(__dirname, 'src', 'app', 'models'),
  'migrations-path': resolve(__dirname, 'src','database', 'migrations'),
  'seeders-path': resolve(__dirname, 'src', 'database', 'seeds')
}
