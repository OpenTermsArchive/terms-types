export default [
  {
    extends: [ 'airbnb-base' ],
    parserOptions: { ecmaVersion: 2022 },
    env: {
      node: true,
      es6: true,
    },
    plugins: [ 'json-format' ],
    rules: {
      'import/extensions': [
        'error',
        'always',
        { ignorePackages: true },
      ]
    }
  }
];
