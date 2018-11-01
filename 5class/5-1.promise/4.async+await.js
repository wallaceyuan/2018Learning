/**
 * Created by yuanyuan on 2018/10/14.
 */


let fs = require('fs')
let bluebird = require('bluebird')

let read = bluebird.promisify(fs.readFile)

//1.可以让代码像同步
//2.可以try+catch
//3.可以使用promise形式吧
async function r() {
    try{
        let r1 = await read('1.txt','utf8')
        let r2 = await read(r1,'utf8')
        let r3 = await read(r2,'utf8')
        return r3
    } catch (e) {
        console.log('e', e)
    }
}


r().then(data=> {
    console.log(data)
},err=>{
    console.log('err',err)
})

//async + await = generator + co