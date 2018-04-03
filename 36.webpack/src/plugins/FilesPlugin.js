class FilesPlugins{
    constructor(){

    }
    apply(compiler){
        compiler.hook.compilation.tap('',function(source) {
            compilation()
        })
    }
}