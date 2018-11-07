
let {resolve} = require('path')
var webpackPath = resolve(__dirname, 'node_modules', 'webpack-cli', 'bin', 'cli.js');

console.log(webpackPath)
require(webpackPath);
