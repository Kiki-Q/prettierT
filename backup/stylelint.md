#
## 参考文档（https://blog.csdn.net/weixin_44484471/article/details/127057790#:~:text=1%20%E6%89%93%E5%BC%80%E9%A1%B9%E7%9B%AE%E6%A0%B9%E7%9B%AE%E5%BD%95%E7%9A%84%E7%9A%84%20%E7%BB%88%E7%AB%AF%20cmd%202%20%E8%BE%93%E5%85%A5%20yarn%20add,-D%203%20%E4%B8%8B%E8%BD%BD%E5%AE%8C%E6%88%90%E5%90%8E%20%E8%BE%93%E5%85%A5%20yarn%20run%20eslint%20--init）
stylelint中文网: https://stylelint.bootcss.com/

stylelint插件集合: https://github.com/stylelint/awesome-stylelint#plugins

stylelint-prettier插件: https://github.com/prettier/stylelint-prettier

自定义样式顺序: https://github.com/hudochenkov/stylelint-order

预设样式顺序: https://github.com/kutsan/stylelint-config-clean-order

vue配置: https://github.com/ota-meshi/stylelint-config-standard-vue

stylelint-config-prettier-scss:https://github.com/prettier/stylelint-config-prettier-scss
## 安装
```
npm i postcss postcss-html stylelint stylelint-order stylelint-config-clean-order stylelint-prettier -D
```
```
yarn add postcss postcss-html stylelint stylelint-order stylelint-config-clean-order prettier stylelint-prettier stylelint-config-standard-vue stylelint-config-standard-scss stylelint-config-prettier-scss -D
```
## stylelint.js
```
module.exports = {
  processors: [],
  plugins: [],
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {},	// 可以自己自定一些规则
};
```