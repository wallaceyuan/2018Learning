/**
 * Created by yuanyuan on 2018/11/22.
 */
Function.prototype.apply = function (context) {
    var context = context || window
    //getValue.call(a,'hello','world')  a.fn = getValue
    context.fn = this

    var result

    if(arguments[1]){
        result = context.fn(...arguments[1])
    }else{
        result = context.fn()
    }

    delete context.fn
    return result
}