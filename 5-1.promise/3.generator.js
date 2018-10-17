/**
 * Created by yuanyuan on 2018/10/9.
 */
function *say() {
    yield 1
    yield 2
    yield 3
}


let it = say() //it 就是iterator 迭代器

let obj = it.next()
console.log(obj)

//var co = require('co');

function *say() {
    let a = yield "去厕所1"
    console.log(a)
    let b = yield "去厕所2"
    console.log(b)
}

let it = say()
console.log(1, it.next())
console.log(2, it.next())
console.log(3, it.next())


function gen() {
    return {
        next(param) {
            return {value, done}
        }
    }
}


let bluebird = require('bluebird')
let fs = require('fs')
//let co = require('co')

let read = bluebird.promisify(fs.readFile)

//generator + co
function *r() {
    let r1 = yield read('1.txt', 'utf-8')
    console.log('r1', r1); //r1 2.txt
    let r2 = yield read(r1, 'utf-8')
    console.log('r2', r2); //r2 3.txt
    let r3 = yield read(r2, 'utf-8')
    console.log('r3', r3); //r3 hello
    return r3
}

const it_r = r()
it_r.next().value.then(d1=> {
    return it_r.next(d1).value
}).then(d2=> {
    return it_r.next(d2).value
}).then(d3=> {
    return it_r.next(d3).value
}).then(data=> {
    console.log(data) // hello
})

function co(it) {
    return new Promise((resolve, reject)=> {
        function next(data) {
            let {value, done} = it.next(data)
            if (done) {
                resolve(value)
            } else {
                value.then(data=> {
                    next(data)
                }, reject)
            }
        }

        next()

        /*let {value, done} = it.next()
        value.then(data=> {
            console.log(data)
            let {value, done} = it.next(data)
            value.then(data=> {
                console.log(data)
                let {value, done} = it.next(data)
                value.then(data=> {
                    let {value, done} = it.next(data)
                    if (done)resolve(value)
                })
            })
        })*/
    })
}

co(r()).then(data=> {
    console.log(data)
})

function *a() {
    yield 1
}

function * b() {
    yield *a() //在生成器函数中使用生成器要用 *
    yield 2
}

let its = b()

console.log(its.next())