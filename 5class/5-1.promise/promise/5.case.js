/**
 * Created by yuan on 2018/10/7.
 */
let Promise = require('./5.promise')

new Promise((resolve,reject)=>{
    resolve(123)
})

Promise.resolve(123).then(data=>{
    console.log('data'+data)
})


Promise.reject(123).then(data=>{
    console.log('data'+data)
},err=>{
    console.log('err'+err)
})

Promise.reject(123).then().catch(e=>{
    console.log('e'+e)
})