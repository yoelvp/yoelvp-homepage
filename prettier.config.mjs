/** @type {import('prettier').Config} */
const config = {
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: false,
  useTabs: false,
  arrowParens: 'always',
  bracketSpacing: true,
  bracketSameLine: false,
  trailingComma: 'none',
  endOfLine: 'lf',
  singleAttributePerLine: true,
  importOrderTypeScriptVersion: '5.0.0',
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-astro'
  ],
  importOrder: [
    '^type\\s.*$',
    '<THIRD_PARTY_MODULES>',
    '^@[/]',
    '^[.]/.*$',
    '^[.]{2}/.*$',
    '[.]css$'
  ],
  overrides: [
    {
      files: '*.html',
      options: {
        tabWidth: 2,
        htmlWhitespaceSensitivity: 'strict'
      }
    }
  ]
}

export default config
