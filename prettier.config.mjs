/** @type {import("prettier").Config} */
const config = {
  semi: true,
  tabWidth: 2,
  singleQuote: false,
  jsxSingleQuote: false,
  useTabs: false,
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: false,
  trailingComma: "none",
  endOfLine: "lf",
  singleAttributePerLine: false,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-astro"
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    },
    {
      files: "*.html",
      options: {
        tabWidth: 2,
        htmlWhitespaceSensitivity: "strict"
      }
    }
  ]

}

export default config
