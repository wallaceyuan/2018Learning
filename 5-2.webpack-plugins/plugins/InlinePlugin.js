class InlinePlugin {
  constructor(options){
    this.options = options
  }
  apply(compiler){
    //先监听compilation事件
    compiler.hooks.compilation.tap('InlinePlugin',(compilation)=>{
      compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync('InlinePlugin',(htmlPluginData, callback)=>{
        console.log(htmlPluginData)
      })
    })
  }
}

module.exports = InlinePlugin