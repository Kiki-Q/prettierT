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
    vueIndentScriptAndStyle: true
}
