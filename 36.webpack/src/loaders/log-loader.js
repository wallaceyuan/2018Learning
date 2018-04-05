const loaderUtils = require('loader-utils');
const validateOptions = require('schema-utils');

module.exports = function(source){
  this.callback(null,source)
}