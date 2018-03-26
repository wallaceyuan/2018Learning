let {SyncHook} = require('tapable')
class SyncHook{
  constructor(){
    this.hooks = []
  }
  tap(name,fn){
    this.hooks.push(fn)
  }
  call(){
    this.hooks.forEach(hook=>hook(...arguments))
  }
}



let queue = new SyncHook(['name','age'])

queue.tap('1',function(name,age){
  console.log(name,1)
})

queue.tap('2',function(name,age){
  console.log(name,2)
})

queue.tap('3',function(name,age){
  console.log(name,3)
})


queue.call('zfpx')