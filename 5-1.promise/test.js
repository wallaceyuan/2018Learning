/**
 * Created by yuan on 2018/10/16.
 */
let fs = require('fs')
function read(path,encode) {
    return new Promise((resolve,reject)=>{
        fs.readFile('1.txt','utf8',function (err,data) {
            if(err) reject(err)
            resolve(data)
        })
    })
}

read('1.txt','utf8').then(
    data=>console.log(data),
    err=>console.log(err)
)



function *say() {
    let a = yield "test1"
    console.log(a)
    let b = yield "test2"
    console.log(b)
}

let it = say()

console.log(1, it.next()) //1 { value: 'test1', done: false }
console.log(2, it.next('aaa')) //2 { value: 'test2', done: false }
console.log(3, it.next('bbb')) //3 { value: undefined, done: true }