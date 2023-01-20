module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'eslint-config-prettier',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', 'import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        bracketSpacing: true,
      },
    ],
  },
};
