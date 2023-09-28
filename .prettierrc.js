module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  useTabs: false,
  // 一个tab代表几个空格数，默认为80
  // 使用 2 个空格缩进
  tabWidth: 2,
  tabSize: 2,
  // 行位是否使用分号，默认为true
  semi: true,
  // 字符串是否使用单引号，默认为false，使用双引号
  singleQuote: true,
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾不需要逗号 'es5'  none // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  trailingComma: 'es5',
  // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 在单个箭头函数参数周围加上括号<avoid|always>
  arrowParens: 'avoid',
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 换行符使用 lf 结尾是 \n \r \n\r auto
  endOfLine: 'lf',
  vueIndentScriptAndStyle: true,

  // 常用配置相关解释
  // printWidth: 100, // 超过最大值换行
  // tabWidth: 4, // 缩进字节数
  // useTabs: false, // 缩进不使用tab，使用空格
  // semi: true, // 句尾添加分号
  // singleQuote: true, // 使用单引号代替双引号
  // proseWrap: "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  // arrowParens: "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  // bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  // disableLanguages: ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
  // endOfLine: "auto", // 结尾是 \n \r \n\r auto
  // eslintIntegration: false, //不让prettier使用eslint的代码格式进行校验
  // htmlWhitespaceSensitivity: "ignore",
  // ignorePath: ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  // jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  // jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  // parser: "babylon", // 格式化的解析器，默认是babylon
  // requireConfig: false, // Require a 'prettierconfig' to format prettier
  // stylelintIntegration: false, //不让prettier使用stylelint的代码格式进行校验
  // trailingComma: "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  // tslintIntegration: false // 不让prettier使用tslint的代码格式进行校验
};
