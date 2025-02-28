import globals from "globals";
import eslintPluginAstro from "eslint-plugin-astro";

/** @type {import("eslint").Linter.Config[]} */
export default [
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
    overrides: [
      {
        files: ["*.astro"],
        processor: "astro/client-side-ts",
      }
    ],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    rules: {
      semi: "off"
    }
  }
]
