/**
 * Created by yuan on 2018/10/4.
 */
//https://promisesaplus.com/
function Promise(executor) {
    let self = this
    self.value = undefined
    self.reason = undefined
    self.status = 'pending'
    self.onResovedCallbacks = []
    self.onRejectedCallbacks = []
    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value
            self.status = 'resolved'
            self.onResovedCallbacks.forEach(fn=>fn())
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.reason = reason
            self.status = 'rejected'
            self.onRejectedCallbacks.forEach(fn=>fn())
        }
    }

    //如果函数执行时发生异常
    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}


function resolvePromise(promise2, x, resolve, reject) {
    //If promise and x refer to the same object, reject promise with a TypeError as the reason.
    if (promise2 === x) {
        return reject(new TypeError('chaining cycle'))
    }
    let called
    //2.3.3.Otherwise, if x is an object or function,
    if (x !== null && (typeof x == 'object' || typeof x === 'function')) {
        try {
            let then = x.then
            //2.3.3.3.If then is a function, call it with x as this, first argument resolvePromise, and second argument rejectPromise, where:
            //2.3.3.3.3.If both resolvePromise and rejectPromise are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored.
            if (typeof then === 'function') {
                then.call(x, y=> {
                    if (called) return;
                    called = true;
                    //递归直到解析成普通值为止
                    //2.3.3.1.If/when resolvePromise is called with a value y, run [[Resolve]](promise, y).
                    resolvePromise(promise2, y, resolve, reject)
                }, err=> {
                    if (called) return;
                    called = true;
                    reject(err)
                })
            } else {
                resolve(x)
            }
        } catch (e) {
            if (called) return;
            called = true;
            //2.3.3.3.If retrieving the property x.then results in a thrown exception e, reject promise with e as the reason.
            reject(e)
        }
    } else {
        //If x is not an object or function, fulfill promise with x.
        resolve(x)
    }
}
//then调用的时候 都是异步调用 (原生的then的成功或者失败 是一个微任务)
Promise.prototype.then = function (onFulfilled, onRejected) {
    //成功和失败的函数 是可选参数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val=>val;
    onRejected = typeof onRejected === 'function' ? onRejected : (e)=> {throw e};
    let self = this
    let promise2;
    promise2 = new Promise((resolve, reject)=> {
        if (self.status === 'resolved') {
            setTimeout(()=> {
                try {
                    let x = onFulfilled(self.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            }, 0)
        } else if (self.status === 'rejected') {
            setTimeout(()=> {
                try {
                    let x = onRejected(self.reason)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            }, 0)
        } else if (self.status === 'pending') {
            self.onResovedCallbacks.push(()=> {
                setTimeout(()=> {
                    try {
                        let x = onFulfilled(self.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        //当执行成功回调的时候,可能会出现异常,那就用这个异常作为promise2的错误结果
                        reject(e)
                    }
                }, 0)
            })
            self.onRejectedCallbacks.push(()=> {
                setTimeout(()=> {
                    try {
                        let x = onRejected(self.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            })
        }
    })
    return promise2
}
//setTimeout (规范要求)

Promise.defer = Promise.deferred = function () {
    let dfd = {}
    dfd.promise = new Promise((resolve, reject)=> {
        dfd.resolve = resolve
        dfd.reject = reject
    })
    return dfd;
}

//npm install promises-aplus-tests -g

module.exports = Promise