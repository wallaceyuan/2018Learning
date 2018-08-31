const loaderUtils = require('loader-utils');
const validateOptions = require('schema-utils');
const path = require('path')
let json = {
  "type":"object",
  "properties":{
    "content":{
      "type":"string"
    }
  }
}

/*** @param source 文件的圆内容
* */
module.exports = function(source){
  let options = loaderUtils.getOptions(this)
  validateOptions(json,options)
  console.log(options.content)
  let callback = this.async()
  setTimeout(()=>{
    callback(null,source)
  },0)
  //console.log('source',source)
  //return source
  //this.callback(null,sourec)
}