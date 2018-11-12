const {
    SyncHook,
    AsyncParallelHook
} = require('tapable');

class Compiler {
    constructor(options) {
        this.hooks = {
            accelerate: new SyncHook(["newSpeed"]),
            break: new SyncHook(),
            calculateRoutes: new AsyncParallelHook(["source", "target", "routesList"])
        };
        let plugins = options.plugins;
        if (plugins && plugins.length > 0) {
            plugins.forEach(plugin => plugin.apply(this));
        }
        console.time('cost');
        this.hooks.accelerate.call('hello');
        this.hooks.break.call();
        this.hooks.calculateRoutes.callAsync('i', 'like', 'tapable', err => {
            console.timeEnd('cost');
            if (err) console.log(err)
        });
    }
    run(){

    }
}

module.exports = Compiler

