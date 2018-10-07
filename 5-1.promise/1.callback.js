/**
 * Created by yuan on 2018/9/26.
 */
//高阶函数
//1.将函数作为函数的参数传递进去(回调)
function a() {
    return function () {}
}
// 判断类型
// typeof instanceof constructor object.prototype.toString.call
function isType(content,type) {//[object String]
    let t = Object.prototype.toString.call(content).replace(/\[object\s|\]/g,'')
    return t === type
}

console.log(isType('hello', 'String'));

function isType_v2(type) {
    return function(content) {//[object String]
        let t = Object.prototype.toString.call(content).replace(/\[object\s|\]/g,'')
        return t === type
    }
}

const isString = isType_v2('String')
console.log(isString('hello'));

const isNumber = isType_v2('Number')
console.log(isNumber(1));

let types = ['String','Undefined','Function','Number']
let util = {}
types.forEach(k=>util['is'+k] = isType_v2(k))
console.log(util)

console.log(util.isString('hello'))


//2.传统的callback promise
//lodash after async Promise.all

let fn = after(3,function () {
    console.log('调用了三次才执行')
})
fn()
fn()
fn()


function after(times,callback){
    return function () {
        console.log(times);
        if(--times == 0){
            callback()
        }
    }
}

let fs = require('fs');

//发布订阅 订阅(先把他暂存起来)
let event = {
    arr:[],
    result:[],
    on(fn){
        this.arr.push(fn)
    },
    emit(data){
        this.result.push(data)
        this.arr.forEach(fn=>fn(this.result))
    }
}

event.on(function (data) {
    if(data.length === 2){
        console.log(data)
    }
})

fs.readFile('1.txt','utf8',function (err,data) {
    event.emit(data)
})
fs.readFile('2.txt','utf8',function (err,data) {
    event.emit(data)
})
