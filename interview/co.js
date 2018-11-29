/**
 * Created by yuan on 2018/11/29.
 */

var co = require('co')

co(function *() {
    var a = Promise.resolve(1);
    var b = Promise.resolve(2);
    var c = Promise.resolve(3);
    var res = yield [a, b, c];
    return res
}).then((data)=> {
    console.log('data '+data)
},(err)=> {
    console.log('err '+err)
})