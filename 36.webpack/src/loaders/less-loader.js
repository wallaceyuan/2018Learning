/**
 * Created by yuan on 2018/8/28.
 */
let less = require('less')
module.exports = function (source) {
    less.render(source,(err,result)=>{
        this.callback(err,result.css)
    })
}