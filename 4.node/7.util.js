/**
 * Created by yuanyuan on 2018/1/14.
 */
let util = require('util')
let obj = {name:'zfpx',home:{
    city:{name:'beijing'}
}}

console.log(util.inspect(obj,{depth:1}));