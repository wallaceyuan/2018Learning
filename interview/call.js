/**
 * Created by yuanyuan on 2018/11/22.
 */
Function.prototype.call = function (context) {
    var context = context || window

    //getValue.call(a,'hello','world')  a.fn = getValue

    context.fn = this

    var args = [...arguments].slice(1)

    var result = context.fn(...args)

    delete context.fn

    return result
}