/**
 * Created by yuanyuan on 2018/11/22.
 */

function add(a, b) {
    return a + b;
}

/*var curry = function (func, args) {
    var length = func.length
    args = args ? Array.from(args) : []
    return function () {
        var newArgs = args.concat([].slice.call(arguments));
        if (newArgs.length < length) {
            return curry.call(this, func, newArgs)
        } else {
            return func.apply(this, newArgs);
        }
    }
}*/

/*const curry  = function (fn,arr = []) {
    return (...args) =>{
        if([...arr,...args].length == fn.length){
            return fn(...arr,...args)
        }else{
            return curry(fn,[...arr,...args])
        }
    }
}*/

/*const curry = (fn, arr = []) => (...args)=>(a=> a.length === fn.length ? fn(...a) : curry(fn, a))([...arr, ...args])*/

var addCurry = curry(add);
addCurry(1)(2)

console.log(addCurry(1)(2));


