/**
 * Created by yuan on 2018/2/25.
 */
let http = require('http')
let url = require('url')
let path = require('path')
let fs = require('fs')

http.createServer(function (req,res) {
    let {pathname} = url.parse(req.url,true)
    let filepath = path.join(__dirname,pathname)
    fs.stat(filepath,(err,stat)=>{
        if(err){
            return sendError(req,rs)
        }
    })
}).listen(8080)