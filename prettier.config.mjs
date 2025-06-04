/** @type {import('prettier').Config} */
const config = {
  printWidth: 80,
  semi: false,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  endOfLine: 'lf',
  trailingComma: 'none',
  plugins: ['prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.{json,yml,yaml}',
      options: {
        singleQuote: false
      }
    }
  ]
}

export default config
