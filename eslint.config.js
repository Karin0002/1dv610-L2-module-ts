import globals from "globals"
import pluginJs from "@eslint/js"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import stylistic from "@stylistic/eslint-plugin"


export default [
  eslint.configs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  stylistic.configs["recommended-flat"],
  {
    ignores: ["node_modules/", "build/", "eslint.config.js"]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module"
    }
  },
  {
    files: ["src/**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      }
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": ["error"],
      "@typescript-eslint/explicit-module-boundary-types": ["error"],
      "@stylistic/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "@stylistic/space-before-function-paren": ["error", "always"]
    }
  }
]