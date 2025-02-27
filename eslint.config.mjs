import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint"
import eslintPluginAstro from "eslint-plugin-astro";

/** @type {import("eslint").Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: [
      "/dist",
      "/node_modules"
    ]
  },
  {
    files: [
      "**/*.{astro,js,mjs,ts}"
    ],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    ...tseslint.configs.recommended,
    rules: {
      semi: "off"
    }
  }
]
