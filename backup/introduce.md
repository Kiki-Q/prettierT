#
## git的代码提交规则的约束工具： commitlint 和husky。
1. commitlint（对commit message进行规范检验）
2. husky（git hooks 操作）
### husky：只使用husky 1.会对所有文件都进行检验，成本高；2.对中途加入husky项目不友好
#### Lint-staged（解决上述问题，只对git add暂存区内文件检测，对不同文件后缀可做不同操作）
```
<!-- 安装 -->
npm install lint-staged --save-dev
<!-- 配置 -->

```
## 代码格式化 Eslint & prettier
### Eslint:检验代码风格+检验代码问题
#### 包：只能运行检测
```
    <!-- npm包 -->
    <!-- 安装（全局/开发） -->
    npm i eslint -g
    <!-- 创建eslintrc.js: 可配置代码格式风格 -->
    npx eslint --init
    <!-- 运行 -->
    eslint test.js
    <!-- 修复 -->
    eslint index.js --fix
    <!-- 添加脚本script -->
    "lint": "eslint --ext .js --ext .jsx --ext .vue src/",
    "lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue src/"
    "lint": "eslint 'src/**/*.{js,ts}' --fix"
    <!-- 添加.eslintignore -->
    
```
#### vscode插件：边开发边检测(优先eslintrc.js配置)
```
    <!-- vscode配置自动保存 -->
    //setting.json文件

    "editor.formatOnType": true,
    "editor.formatOnSave": true,
    "eslint.codeAction.showDocumentation": {
        "enable": true
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    },
    "eslint.validate": ["javascript", "javascriptreact", "html", "vue"],

```
### prettier：处理eslint处理不了的代码格式问题，美观整洁
#### 包
```
<!-- 安装 -->
npm i prettier -D
<!-- 执行 -->
npx prettier --write test.js
<!-- 自定义配置:.prettierrc(.js) -->
<!-- 忽略配置：.prettierignore -->
```
#### vscode插件
```
<!-- 配置一下prettier自动保存 -->

//setting.json文件

    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }，
```
### 冲突：
#### 1. 把eslint插件的自动保存配置删除了，只要prettier的自动保存
#### 2. eslintrc和prettierrc配置文件保持高度一致
```
<!-- 配置 -->
//.eslintrc.js
  
 module.exports = {
    env:{
        browser:true,
        es2021:true,
        node:true
    },
    rules:{
        quotes:0,
        semi:0
    },
    ...,
}
```
#### 3.plugin：eslint-plugin-prettier全面处理
##### plugin：要引入对应的插件模块，然后配置相对应的规则rules才会生效
```
<!-- 选择相应包安装 -->
npm i eslint @vue/eslint-config-prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue prettier -D

<!-- 安装 -->
npm i eslint-config-prettier eslint-plugin-prettier -D
<!-- 配置 -->
// 最终的.eslintrc.js
module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'], // 覆盖eslint格式配置,写在最后
  parserOptions: {
    ecmaVersion: 13
  }
}

```
##### extends：是已经配置好的规则，后面的extends会覆盖前面的extends
#### 4.rules冲突：1.把自己想要的规则配置成npm包发布，然后引入到这个extends数组中。 2.回2保持一致

## Stylelint:css的lint工具
### less
```
<!-- 安装 -->
npm install stylelint stylelint-config-prettier stylelint-config-recommended-less stylelint-config-standard stylelint-config-standard-vue stylelint-less stylelint-order postcss-html postcss postcss-less -D
```
### scss
```
<!-- 安装 -->
npm install sass sass-loader stylelint stylelint-config-prettier stylelint-config-standard stylelint-config-html stylelint-order stylelint-scss postcss-html postcss-scss -D
```
#### 创建.stylelintrc.js，按less和scss分类
### 配置script
```
"lint:style": "stylelint \"./**/*.{css,less,vue,html,sass,scss}\" --fix",
```
## Commitizen: git message工具
```

```

## 遇到的问题
#### 1.现在搜索安装配置大多文章如此[本人vscode安装后按规范也提交不了](https://zhuanlan.zhihu.com/p/513741947)，可用的[简单可行，不知道是不是husky版本问题](https://blog.csdn.net/qq_21197033/article/details/128545357)