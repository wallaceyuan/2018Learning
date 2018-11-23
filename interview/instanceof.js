/**
 * Created by yuan on 2018/11/23.
 */

//原型 是根据 _proto_原型链 去找寻prototype

function my_instanceof(left, right) {

    let prototype = right.prototype

    left = left.__proto__

    while(true){
        if(left === null){
            return false
        }else if(prototype === left){
            return true
        }
        left = left.__proto__
    }


}

console.log([1,2,3] instanceof Array)

console.log(my_instanceof([1, 2, 3], Array));