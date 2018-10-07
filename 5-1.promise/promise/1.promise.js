/**
 * Created by yuan on 2018/10/4.
 */
function Promise(executor) {
    let self = this
    self.value = undefined
    self.reason = undefined
    self.status = 'pending'
    self.onResovedCallbacks = []
    self.onRejectedCallbacks = []
    function resolve(data) {
        if(self.status === 'pending'){
            self.value = data
            self.status = 'resolved'
            self.onResovedCallbacks.forEach(fn=>fn())
        }
    }
    function reject(reason) {
        if(self.status === 'pending') {
            self.reason = reason
            self.status = 'reject'
            self.onRejectedCallbacks.forEach(fn=>fn())
        }
    }
    //如果函数执行时发生异常
    try{
        executor(resolve,reject)
    }catch (e){
        reject(e)
    }
}

Promise.prototype.then = function (onFulfilled,onRejected) {
    let self = this
    if(self.status === 'pending'){
        self.onResovedCallbacks.push(()=>{
            onFulfilled(self.value)
        })
        self.onRejectedCallbacks.push(()=>{
            onRejected(self.reason)
        })
    }else if(self.status === 'resolved'){
        onFulfilled(self.value)
    }else if(self.status === 'reject'){
        onRejected(self.reason)
    }

}

module.exports = Promise