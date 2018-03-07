#! /usr/bin/env node

let yargs = require('yargs')

let argv = yargs.options('n', {
    alias: 'name',//别名
    demand: true,//必填
    default: 'zfpx',
    description: '请输入你的姓名'
})
    .usage('help [options]')
    .help()//指定帮助信息
    .example('hello -name zfpx', '执行hello命令，然后传入name参数为zfpx')
    .argv

console.log(argv)

console.log('hello'+argv.name)
