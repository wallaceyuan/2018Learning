/**
 * Created by yuan on 2018/10/6.
 */
//链式调用
let fs = require('fs')
//let Promise = require('Promise')
//let Promise = require('./1.promise')

function read(filePath,encoding) {
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,encoding,(err,data)=> {
            if(err) reject(err)
            resolve(data)
        })
    })
}
/*read('../read.md','utf8').then(data=>{
    console.log(data)
},err=>{
    console.log(err)
})*/

//如果一个promise执行完后,返回的还是一个promise,会把这个promise的执行结果,传递给下一个then中
//2.如果then中返回的不是promise 是一个普通值,会将这个普通值作为下一个then的返回结果
//3.如果当前then中失败了 会走下一个then的失败
//4.如果返回的是undefined 不管当前是失败还是成功 都会走下一次成功
//5.catch是错误没有处理的情况下会走
//6.then中可以不写
read('../1.txt','utf8').then(data=>{
    return read('../2.txt','utf8')
}).then(data=>{
    return data.split('').re    .then(data=>{throw new Everse().join('')
}).then(data=>{
    throw new Error('出错')
}).then()
    .then(data=>{console.log(data)},()=>{console.log('xxx')})
    .catch(err=>{console.log('catch')})
    .then(data=>{throw new Error()})
rror()})