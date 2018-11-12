const {
    SyncHook,
    AsyncParallelHook
} = require('tapable');

class Car {
    constructor() {
        this.hooks = {
            accelerate: new SyncHook(["newSpeed"]),
            break: new SyncHook(),
            calculateRoutes: new AsyncParallelHook(["source", "target", "routesList"])
        };
    }
}

const myCar = new Car();

myCar.hooks.break.tap("WarningLampPlugin", () => console.log('WarningLampPlugin'));
myCar.hooks.accelerate.tap("LoggerPlugin", newSpeed => console.log(`Accelerating to ${newSpeed}`));
// myCar.hooks.calculateRoutes.tapPromise("calculateRoutes tapPromise", (source, target, routesList, callback) => {
//     // return a promise
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`tapPromise to ${source}${target}${routesList}`)
//             resolve();
//         },1000)
//     })
// });
myCar.hooks.calculateRoutes.tapAsync("calculateRoutes tapAsync", (source, target, routesList, callback) => {
    // return a promise
    setTimeout(() => {
        console.log(`tapAsync to ${source}${target}${routesList}`)
        callback();
    }, 2000)
});

myCar.hooks.break.call();
myCar.hooks.accelerate.call('hello');

console.time('cost');
// myCar.hooks.calculateRoutes.promise('i', 'love', 'tapable').then(() => {
//     console.timeEnd('cost');
// }, err => {
//     console.error(err);
//     console.timeEnd('cost');
// })

myCar.hooks.calculateRoutes.callAsync('i', 'like', 'tapable', err => {
    console.timeEnd('cost');
    if(err) console.log(err)
})




// class myPlugin{
//   constructor() {

//   }
//   apply(compiler) {
//     compiler.hooks.accelerate.tap('accelerate',(param)=>{
//         console.log(param)
//     })
//   }
// }

