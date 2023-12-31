module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // 自定义测试：0是忽略，1是警告，2是报错
    // quotes: 2,
    // semi: 1,
    // 'space-before-function-paren': 0,
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    //"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
};
