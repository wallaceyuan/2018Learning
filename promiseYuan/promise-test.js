/**
 * Created by yuan on 2018/1/12.
 */
let Promise1 = require('./Promise');
let p1 = new Promise1(function(resolve,reject){
    setTimeout(function(){
        resolve(100);
    },1000);
});
//成功回调后的值会被用来resolve当前的promise
//成功的回调里又返回了一个新的promise
//成功的回调里返回的promise还不是我自己写Promise
//如果成功的回调里返回了一个promise,那么promise2要以promise的resovle结果来resolve自己
let p2 = p1.then(function(data){
    return new Promise1(function(resolve,reject){
        setTimeout(function(){
            resolve(new Promise1(function(resolve,reject){
                setTimeout(function(){
                    resolve(data+100);
                },1000);
            }));
        },1000);
    });
});
p2.then(function(data){
    console.log('p2成功',data);
},function(err){
    console.log('p2失败',err);
});
/**
 * a.自己真正实现一个 PromiseA 并通过 所有的单元测试
 * 2.自己添加all race reject resolve
 *
 **/

/*all*/
function timerPromisefy(delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(delay);
        }, delay);
    });
}

const startDate = Date.now()

let p11= new Promise(function(resolve,reject){
    setTimeout(function(){
        reject('p1失败');
    },1000);
});
let p22 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(200);
    },2000);
});

console.time('cost');
console.time('cost2');

Promise.all([p11,p22]).then(function(data){
    console.log(data);//[a,2]
    console.timeEnd('cost');
},function(err){
    console.log(err);
    console.timeEnd('cost');
});

/*resolve*/
var t2 = Promise1.resolve(1)
/*race*/
Promise1.race([
    t2,
    timerPromisefy(11),
    timerPromisefy(7),
    timerPromisefy(64),
    timerPromisefy(128)
]).then(values =>{
    console.log('race',values);
    console.log(Date.now() - startDate + 'ms');
})


var r = Promise1.reject(new Error("error"));
console.log(r === Promise1.reject(r));// false
