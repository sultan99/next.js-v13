/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ['en', 'ru'],
  sourceLocale: 'en',
  extractBabelOptions: {
    presets: [
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
  },
  catalogs: [
    {
      path: '<rootDir>/locales/{locale}/messages',
      include: ['<rootDir>/app'],
      exclude: ['**/node_modules/**'],
    },
  ],
  format: 'po',
};
