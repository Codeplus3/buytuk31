module.exports = {
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  endOfLine: 'crlf',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: 'auto',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
      },
    },
    {
      files: '*.md',
      options: {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        proseWrap: 'always',
      },
    },
    {
      files: '*.html',
      options: {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        htmlWhitespaceSensitivity: 'ignore',
      },
    },
  ],
};
