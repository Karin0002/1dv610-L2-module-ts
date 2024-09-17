import typescriptEslintEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsdoc from "eslint-plugin-tsdoc";
import tsParser from "@typescript-eslint/parser";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import js from "@eslint/js";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//     baseDirectory: __dirname,
//     recommendedConfig: js.configs.recommended,
//     allConfig: js.configs.all
// });

export default [
    // ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),
    {
        files: ["**/*.ts"],
        plugins: {
            "@typescript-eslint": typescriptEslintEslintPlugin,
            tsdoc,
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2018,
            sourceType: "module",
            parserOptions: {
                project: "./tsconfig.json",
                // tsconfigRootDir: new URL('.', import.meta.url).pathname,
                tsconfigRootDir: "C:\\Users\\Karin\\Desktop\\1dv610\\1dv610-L2-module-ts",
            },
        },
        rules: {
            "tsdoc/syntax": "warn",
        },
        linterOptions: {
            // root: true
        }
    },
];