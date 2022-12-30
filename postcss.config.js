/* 
* Postcss 插件说明。
* postcss-mixins (https://github.com/postcss/postcss-mixins)  -- 用于书写通用的 css mixins，使响应式等操作更加通用化。
* postcss-css-variables (https://github.com/MadLittleMods/postcss-css-variables) -- 用于实现 css 变量。
* postcss-nesting  (https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting) -- 基于 CSS Nesting 语法规范的嵌套语法。
* lost (https://github.com/peterramsing/lost) -- 基于 calc 的栅栏系统
* autoprefixer (https://github.com/postcss/autoprefixer) -- 添加浏览器前缀。
* 
*/
module.exports = {
  plugins: [
    require('postcss-mixins'),
    require('postcss-css-variables'),
    require('postcss-nesting'),
    require('lost'),
    require('autoprefixer')
  ]
}
