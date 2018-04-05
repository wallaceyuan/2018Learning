class HelloPlugin {
    constructor(options){
        console.log(options)
        this.options = options
    }
    apply(compiler){
        compiler.hooks.compilation.tap('compilation', function (compilation, params) {
            compilation.hooks.optimizeChunkModules.tap('optimizeChunkModules', function (chunks, modules) {
                //console.log(chunks);
                //console.log(modules);
            });
        });
    }
}

module.exports = HelloPlugin