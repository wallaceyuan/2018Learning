/**
 * Created by yuanyuan on 2018/10/8.
 */
let bluebird = require('bluebird');
let fs = require('fs')

//return回去一个function 返回promise对象才能使用then方法
function promisify(fn) {
    return function () {
        return new Promise((resolve, reject)=> {
            fn(...arguments, function (err, data) {
                if (err) reject(err)
                resolve(data)
            })
        })
    }
}

let read = m(fs.readFile)
read('../1.txt', 'utf-8').then(data=> {
    console.log('data promisify', data)
})


function promisifyAll(obj) {
    Object.keys(obj).forEach(key=>{
        if(typeof obj[key] === 'function'){
            obj[key+'Async'] = promisify(obj[key])
        }
    })
}

promisifyAll(fs)

fs.readFileAsync('../1.txt', 'utf-8').then(data=> {
    console.log('readFileAsync', data)
})
