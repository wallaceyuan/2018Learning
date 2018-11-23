/**
 * Created by yuan on 2018/11/23.
 */

//对象转换为数组 es6
let a1 = Array.from(arguments)

let a2 = [...arguments]


//es5
var a3 = [].slice.call(arguments, 1);