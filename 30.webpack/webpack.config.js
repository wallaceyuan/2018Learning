const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base');
let other = ''

if (process.env.NODE_ENV == 'development'){
  other = require('./webpack.dev.config');
}else{
  other = require('./webpack.prod.config');
}

console.log(merge(base, other));

module.exports = merge(base, other);