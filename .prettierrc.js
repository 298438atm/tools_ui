module.exports = {
  semi: false, //布尔类型，设置为 true 时，Prettier 会在代码的末尾自动添加分号；设置为 false 时，Prettier 不会自动添加分号。
  trailingComma: 'none', //字符串类型，默认为 "es5"。指定 JavaScript 对象或数组的尾随逗号风格。可选值有 "es5"（在 ES5 中允许尾随逗号）、"none"（禁止尾随逗号）、"all"（始终使用尾随逗号）等。
  tabWidth: 2, //数字类型，默认为 2。指定缩进的空格数。
  singleQuote: true, //布尔类型，默认为 false。设置为 true 时，Prettier 会使用单引号；设置为 false 时，Prettier 会使用双引号。
  quotes: false, //布尔类型，默认为 false。设置为 true 时，Prettier 会强制使用引号包裹非空字符串；设置为 false 时，Prettier 不会强制使用引号包裹非空字符串。
  endOfLine: 'auto' //字符串类型，默认为 "auto"。指定换行符的风格。可选值有 "auto"（自动检测系统默认的换行符）、"lf"（强制使用 LF 换行符）、"crlf"（强制使用 CRLF 换行符）等。
}
