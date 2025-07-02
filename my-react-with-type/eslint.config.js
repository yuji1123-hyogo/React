// eslint.config.js
import js from '@eslint/js';
import * as tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    rules: {
      // TypeScriptのおすすめルール
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',

      // React系のルール
      'react/react-in-jsx-scope': 'off', // Viteでは不要
      'react/prop-types': 'off', // TypeScriptを使うので不要

      // Hooksルール
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // import順序など
      'import/order': ['warn', { groups: ['builtin', 'external', 'internal'] }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "prettier" // ← これが重要！
    ]
  },
];
