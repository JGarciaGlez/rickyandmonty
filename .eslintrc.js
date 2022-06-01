module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['solid'],
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:solid/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'solid/reactivity': 'warn',
    'solid/no-destructure': 'warn',
    'solid/jsx-no-undef': 'error',
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
};
