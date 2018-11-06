class InlinePlugin {
  constructor(options){
    this.options = options
  }
  apply(compiler){
    //先监听compilation事件
    compiler.hooks.compilation.tap('InlinePlugin',(compilation)=>{
      // { head:[ { tagName: 'link',
      //            selfClosingTag: false,
      //            voidTag: true,
      //            attributes: {href:'xxx',rel:"stylesheet"}
      //           } ],
      //  body: [ { tagName: 'script', closeTag: true, attributes: [Object] } ],
      //  plugin:
      //   HtmlWebpackPlugin {
      compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync('InlinePlugin',(htmlPluginData, callback)=>{
        console.log(htmlPluginData)
        this.processTags(compilation,htmlPluginData)
      })
    })
  }
  processTags(compilation,htmlPluginData){
    let body = htmlPluginData.body
    htmlPluginData.head.map(tag=>{
      let assetUrl;
      if(tag.tagName == 'link' && this.options.test.test(tag.attributes.href)){
        assetUrl = tag.attributes.href
        tag = {
          tagName:'style',
          attributes:{type:'text/css'}
        }
      }
      if(tag.tagName == 'script' && this.options.test.test(tag.attributes.href)){
        assetUrl = tag.attributes.src
        tag = {
          tagName:'script',
          attributes:{type:'text/javascript'}
        }
      }
    })
  }
}

module.exports = InlinePlugin