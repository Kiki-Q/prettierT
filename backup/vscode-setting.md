#
## prettier可以格式化很多种格式，所以需要在这里对应配置下
```
    //#每次保存的时候自动格式化
    "editor.formatOnSave": true,
```
```
 "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
	// 这个设置在ctrl+s的时候，会启用默认的格式化，这里是prettier
  "editor.formatOnSave": true

```
```
 /* prettier的配置 */
"prettier.printWidth": 80, // 超过最大值换行
"prettier.tabWidth": 2, // 缩进字节数
"prettier.useTabs": false, // 句尾添加分号
"prettier.singleQuote": false, // 使用单引号代替双引号
"prettier.proseWrap": "preserve", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
"prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
"prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
"prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
"prettier.htmlWhitespaceSensitivity": "ignore",
"prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
"prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
"prettier.jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
"prettier.parser": "babylon", // 格式化的解析器，默认是babylon
"prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
"prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
"prettier.trailingComma": "none", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
"prettier.tslintIntegration": false,
"prettier.arrowParens": "avoid"
```