#! /usr/bin/env node

let fs = require('fs')
let {join,resolve} = require('path')
let Compiler = require('../lib/Compiler')
let root = process.cwd() //获取当前工作目录
let options = require(join(root, 'webpack.config.js'))
let compiler = new Compiler(options)
let {plugins} = options
plugins.forEach(plugin => {
    plugin.apply(compiler)
});

compiler.run()