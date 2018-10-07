/**
 * Created by yuan on 2018/10/4.
 */
let Promise = require('./1.promise')

let promise = new Promise((resolve,reject)=>{
    console.log('hello')
    /*reject('123')
    resolve('1212')*/
    //resolve('1212')
    setTimeout(function () {
        reject('1212')
    },1000)
})

promise.then(data=> {
    console.log('success'+data)
},err=>{
    console.log('err'+err)
})

promise.then(data=> {
    console.log('success'+data)
},err=>{
    console.log('err'+err)
})