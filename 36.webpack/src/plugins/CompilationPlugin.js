class CompilationPlugin{
    constructor(options){
        this.options = options
    }
    apply(compiler){
        compiler.hooks.compilation.tap('CompilationPlugin',function(compilation){
            compilation.hooks.optimize.tap('optimize',function () {
                console.log('资源正在被优化')
            })
        })
    }
}
module.exports = CompilationPlugin