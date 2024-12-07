import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import hooksPlugin from 'eslint-plugin-react-hooks';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { settings: { react: { version: 'detect' } } },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  eslintPluginPrettierRecommended,
  {
    rules: {
      //  Base Warning
      'no-console': 'warn',

      // Formatting
      'prettier/prettier': [
        'error',
        {
          semi: true,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: true,
          useTabs: false,
        },
      ],

      // TypeScript
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
  {
    plugins: {
      'react-hooks': hooksPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      ...hooksPlugin.configs.recommended.rules,
    },
    ignores: ['*.test.tsx'],
  },
];
