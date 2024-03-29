module.exports = {

  printWidth: 80,
  /** タブ幅: 2 */ 
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',

  importOrder: [
    'reflect-metadata',
    '^.*\\.vue$',
    '^@core\\/(.*)$',
    '^@server\\/(.*)$',
    '^@ui\\/(.*)$',
    '^src\\/(.*)$',
    '^(\\.{1,}\\/)(.*)$',
    '^.*$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: ['*.md'],
      options: {
        tabWidth: 1,
      },
    },
  ],
};
