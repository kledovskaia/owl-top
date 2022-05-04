module.exports = {
  extends: ['stylelint-config-recommended'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
}
