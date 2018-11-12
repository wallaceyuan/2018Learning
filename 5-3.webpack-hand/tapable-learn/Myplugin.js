const Compiler = require('./Compiler')

class MyPlugin{
    constructor() {

    }
    apply(conpiler){
        conpiler.hooks.break.tap("WarningLampPlugin", () => console.log('WarningLampPlugin'));
        conpiler.hooks.accelerate.tap("LoggerPlugin", newSpeed => console.log(`Accelerating to ${newSpeed}`));
        conpiler.hooks.calculateRoutes.tapAsync("calculateRoutes tapAsync", (source, target, routesList, callback) => {
            setTimeout(() => {
                console.log(`tapAsync to ${source}${target}${routesList}`)
                callback();
            }, 2000)
        });
    }
}

const myPlugin = new MyPlugin();

const options = {
    plugins: [myPlugin]
}
let compiler = new Compiler(options)
compiler.run()