/**
 * Created by yuan on 2018/10/6.
 */
//链式调用
let fs = require('fs')
let Promise = require('./3.promise')

let promise = new Promise((resolve,reject)=>{
    resolve()
})
/*let promise2 = promise.then(data=>{
    return new Promise((resolve,reject)=>{
        resolve(123)
    })
})*/
let promise2 = promise.then(data=>{
    return new Promise((resolve,reject)=>{
        resolve(new Promise((resolve,reject)=>{
            resolve(new Promise((resolve,reject)=>{
                resolve('ok')
            }))
        }))
    })
},err=>console.log(err))

.then(data=>{
    console.log('data'+data)
    return 'ok'
},err=>{
    console.log('err'+err)
}).then(data=>{
    console.log(data)
})

/*
function read(filePath,encoding) {
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,encoding,(err,data)=> {
            if(err) reject(err)
            resolve(data)
        })
    })
}

read('../1.txt','utf8').then(data=>{
    return read('../2.txt','utf8')
}).then(data=>{
    return data.split('').reverse().join('')
}).then(data=>{
    throw new Error('出错')
}).then()
    .then(data=>{console.log(data)},()=>{console.log('xxx')})
    .catch(err=>{console.log('catch')})
    .then(data=>{throw new Error()})
    .then(data=>{throw new Error()})*/
