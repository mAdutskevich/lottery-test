import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  globalIgnores([
    'android/',
    'ios/',
    '.expo/',
    'node_modules/',
    'babel.config.js',
    'jest.config.js',
    'metro.config.js',
    'metro.config.js',
    'package-lock.json',
    '**/*.apk',
  ]),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
  },
  eslintPluginPrettierRecommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    ...pluginReact.configs.flat.recommended,
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      import: importPlugin,
      react: pluginReact,
    },
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-newline': [
        'error',
        { prevent: false, allowMultilines: false },
      ],
      semi: ['error', 'always'],
      indent: 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'never',
        },
      ],
      '@typescript-eslint/indent': 'off',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'block-like', next: 'block-like' },
        {
          blankLine: 'always',
          prev: ['let', 'const', 'var', 'block-like', 'expression'],
          next: ['block-like', 'return', 'expression'],
        },
        {
          blankLine: 'always',
          prev: ['import'],
          next: ['*'],
        },
        {
          blankLine: 'any',
          prev: ['import'],
          next: ['import'],
        },
        { blankLine: 'any', prev: 'expression', next: 'expression' },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'directive', next: 'directive' },
      ],
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
    rules: {
      'prettier/prettier': 'off',
    },
  },
]);
