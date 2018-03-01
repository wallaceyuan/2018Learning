/**
 * Created by yuan on 2018/2/25.
 */

let fs = require('fs')
let path = require('path')
let ws = fs.createWriteStream(path.jon(__dirname),'test2.txt')

process.stdin.on('data',function (data) {
    console.log(222)
    ws.write(data)
})