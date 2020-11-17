module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules:{
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-spaced-func": "off"
  }
};
