# prettierT

## bug
### husky配置报错：pre-commit: npm run lint && npm run format && npm run lint:style
有用：https://blog.csdn.net/qq_21197033/article/details/128545357

### prettier配置文件不起作用，识别了其他
eslintrc、prettier的plugin、prettierrc会冲突，需要设置（出一套配置方案，不会因为编辑器配置而产生问题）
### eslint
```
 extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
    //读.prettierrcjs
    // "prettier"

    // 用plugin，但用eslint覆盖部分prettier配置
    // "plugin:prettier/recommended"
    // rules: {
    //     'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    // },
],
```
### 常见规范怎么选

## 问题
### pre-commit的hook怎么看
### script脚本

## 生产需要解决的问题
1. eslintrc、prettier的plugin、prettierrc会冲突，需要设置（出一套配置方案，不会因为编辑器配置而产生问题）
   （如果vscode配置，会不会影响线上，test：提交时查看和线上对比）
### 如果除去配置的风格，各个开发者编辑器插件有自己的喜好，那么每次提交都有不必要的风格提交冲突，代码审查又不必要的麻烦；怎么规避
### pre-commit
```
npx husky add .husky/pre-commit "npm run lint-staged"
```
