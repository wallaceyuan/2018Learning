/**
 * Created by yuan on 2018/11/23.
 */
/*1.创建了一个全新的对象。
2.这个对象会被执行[[Prototype]]（也就是__proto__）链接。
3.生成的新对象会绑定到函数调用的this。
4.通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
5.如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。*/


function newOperator(ctor) {
    if(typeof ctor !== 'function'){
        throw 'newOperator function the first param must be a function';
    }
    var newObj = Object.create(ctor.prototype)
    var args = [].slice.call(arguments,1)
    var ctorReturnResult = ctor.apply(newObj, argsArr);
    var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
    var isFunction = typeof ctorReturnResult === 'function';
    if(isObject || isFunction){
        return ctorReturnResult;
    }
    // 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象。
    return newObj;
}



function create() {
    //创建一个空对象
    let obj = new Object()
    //从参数中获得构造函数
    let Con = [].shift.call(arguments)
    //链接到原型
    obj.__proto__ = Con.prototype
    //绑定 this,执行构造函数
    let result = Con.apply(obj,arguments)
    // 确保 new 出来的是个对象
    return typeof result === 'object'?result:obj
}

console.log([] == false)