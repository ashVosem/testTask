module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'react'],
  rules: {
    'no-unused-vars': 'warn',
    'import/extensions': 0,
    'no-param-reassign': 0,
    'import/no-unresolved': 0,
  },
};
