module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['react'],
  rules: {
    'react/jsx-max-props-per-line': [
      'error',
      {
        'maximum': 1, // Uma prop por linha
        'when': 'always', // Sempre quebrar as props
      },
    ],
    'react/jsx-first-prop-new-line': ['error', 'always'], // Sempre quebrar a linha após a primeira prop
    'react/jsx-indent': ['error', 2], // Indentação de 2 espaços
    'react/jsx-indent-props': ['error', 2], // Indentação das props
    'react/prop-types': 'off', // Desativa a validação de prop-types (caso não use)
    'react/jsx-no-undef': 'error', // Impede o uso de variáveis não definidas em JSX
  },
  settings: {
    react: {
      version: 'detect', // Detecta a versão do React automaticamente
    },
  },
};
