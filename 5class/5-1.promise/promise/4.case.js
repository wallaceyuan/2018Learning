/**
 * Created by yuan on 2018/10/6.
 */
//链式调用
let fs = require('fs')
let Promise = require('./4.promise')

let p = new Promise((resolve,reject)=>{
    resolve(123)
})

p.then().then(data=>{
    console.log(data)
},err=>{
    console.log('err'+err)
})


function read(filePath,encoding) {
    let dfd =  Promise.defer()
    fs.readFile(filePath,encoding,(err,data)=> {
        if(err) dfd.reject(err)
        dfd.resolve(data)
    })
    return dfd.promise
}

read('../read.md','utf-8').then(data=>{
    console.log(data)
})