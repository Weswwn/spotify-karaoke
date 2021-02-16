module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    "plugin:@typescript-eslint/recommended",
    'airbnb',
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  plugins: [
    'react',
    "@typescript-eslint",
  ],
  rules: {
    "react/jsx-filename-extension": [0],
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": "off",
    "no-use-before-define": "off",
    "react/prop-types": "off"
  },
  // settings: {
  //   "import/resolver": "webpack"
  // {

  // node: {
  //   // extensions: ['.js', '.jsx', '.tsx']
  //   paths: [path.resolve(__dirname, 'src')],
  // }
  // }
  // },
};
