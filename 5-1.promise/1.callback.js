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

after(3,function () {
    console.log('调用了三次才执行')
})






