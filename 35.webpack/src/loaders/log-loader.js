const path = require('path');
const loaderUtils = require('loader-utils');
const validateOptions = require('schema-utils');

module.exports = function(source){
  console.log('loading')
  let callback = this.async()
  this.callback(null,source)
}