import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tsParser from '@typescript-eslint/parser'
import tseslintPlugin from '@typescript-eslint/eslint-plugin'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import';

export default [
   {
      ignores: ['dist'], // Игнорируем папку dist
   },
   {
      files: ['**/*.{ts,tsx}'], // Применяем настройки только к TypeScript
      languageOptions: {
         ecmaVersion: 2020,
         sourceType: 'module',
         globals: globals.browser,
         parser: tsParser, // Используем TypeScript-парсер
         parserOptions: {
            tsconfigRootDir: process.cwd(),
            project: ["./tsconfig.eslint.json"], // ✅ Указываем путь к tsconfig.json
         },
      },
      settings: {
         "import/resolver": {
            typescript: {
               alwaysTryTypes: true,
               project: "./tsconfig.app.json"
            }
         },
         react: {
            version: "detect", // Автоматически определяет версию React
         },
      },
      plugins: {
         'react-hooks': reactHooks,
         'react-refresh': reactRefresh,
         '@typescript-eslint': tseslintPlugin,
         'import': importPlugin,
         prettier: prettierPlugin,
         react: reactPlugin,
      },
      rules: {
         // 🔹 Базовые настройки ESLint
         ...js.configs.recommended.rules,
         ...tseslintPlugin.configs.recommended.rules,
         ...reactHooks.configs.recommended.rules,
         ...prettierConfig.rules,
         ...reactPlugin.configs.recommended.rules,

         // 🔹 Форматирование и стилистика
         "prettier/prettier": ["error", { "endOfLine": "auto" }], // Исправляет ошибки перевода строк
         "react/jsx-sort-props": ["warn", { "callbacksLast": true }], // Сортирует атрибуты JSX
         "@typescript-eslint/consistent-type-imports": ["error", { "prefer": "type-imports" }], // Использует `import type`
         "@typescript-eslint/consistent-type-exports": ["error", { "fixMixedExportsWithInlineTypeSpecifier": true }], // Упорядочивает `export type`
         // Запрещает несуществующие импорты
         "import/no-unresolved": [
            "error",
            {
               "ignore": ["\\.svg$", "\\.png$", "\\.jpg$", "\\.jpeg$", "\\.gif$", "\\.webp$"] // ✅ Игнорируем статические файлы
            }
         ],
         "import/order": [
            "warn",
            {
               "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
               "newlines-between": "always"
            }
         ], // Упорядочивает импорты с пустыми строками между группами
         'react/react-in-jsx-scope': 'off',
         'react/jsx-indent': ['warn', 3], // Отступ в JSX = 3 пробела
         'react/jsx-indent-props': ['warn', 3], // Отступ у пропсов = 3 пробела
         'react/jsx-closing-bracket-location': ['warn', 'line-aligned'], // Закрывающая скобка JSX на новой строке
         'react/self-closing-comp': ['warn'], // Автоматическое преобразование `<div></div>` → `<div />`
         'react/jsx-boolean-value': ['warn', 'never'], // Убирает `{true}` в булевых пропсах

         // 🔹 Улучшение кода
         '@typescript-eslint/no-unused-vars': ['error'], // Ошибка на неиспользуемые переменные
         'prefer-const': 'warn', // Предупреждает, если `let` можно заменить на `const`
         'no-const-assign': 'error', // Запрещает изменение `const`

         // 🔹 Требование явных типов
         '@typescript-eslint/explicit-function-return-type': ['error'], // Требует return type в функциях
         '@typescript-eslint/explicit-module-boundary-types': ['error'], // Требует return type у функций в модулях
         '@typescript-eslint/no-explicit-any': 'error', // Запрещает `any`
         '@typescript-eslint/typedef': [
            'error',
            {
               'arrowParameter': false, // Требует указания типов у параметров стрелочных функций
               'variableDeclaration': false, // Требует указания типов у переменных (включая useState)
               'memberVariableDeclaration': true, // Требует типизацию переменных класса
               'parameter': true, // Требует обязательные типы у параметров функций
            }
         ],

         // 🔹 React Refresh (оптимизация для HMR)
         'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
         ],
      },
   },
]
