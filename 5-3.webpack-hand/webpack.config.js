const path  = require('path')

class EntryOptionWebpackPlugin{
    apply(compiler){
        compiler.hooks.entryOption.tap('EntryOptionWebpackPlugin',(option)=>{
            console.log('EntryOptionWebpackPlugin')
        })
    }
}
class AfterPlugins {
    apply(compiler) {
        compiler.hooks.afterPlugins.tap('AfterPlugins', (option) => {
            console.log('AfterPlugins');
        });
    }
}
class RunPlugin {
    apply(compiler) {
        compiler.hooks.run.tap('RunPlugin', (option) => {
            console.log('RunPlugin');
        });
    }
}
class CompileWebpackPlugin {
    apply(compiler) {
        compiler.hooks.compile.tap('CompileWebpackPlugin', (option) => {
            console.log('CompileWebpackPlugin');
        });
    }
}
class AfterCompileWebpackPlugin {
    apply(compiler) {
        compiler.hooks.afterCompile.tap('AfterCompileWebpackPlugin', (option) => {
            console.log('AfterCompileWebpackPlugin');
        });
    }
}
class EmitWebpackPlugin {
    apply(compiler) {
        compiler.hooks.emit.tap('EmitWebpackPlugin', () => {
            console.log('EmitWebpackPlugin');
        });
    }
}
class DoneWebpackPlugin {
    apply(compiler) {
        compiler.hooks.done.tap('DoneWebpackPlugin', (option) => {
            console.log('DoneWebpackPlugin');
        });
    }
}


module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    output:{
        path:path.resolve('dist'),
        filename:'bundle.js'
    },
    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src', 'loaders')
        ]
    },
    module:{
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'less-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new EntryOptionWebpackPlugin(),
        new AfterPlugins(),
        new RunPlugin(),
        new CompileWebpackPlugin(),
        new AfterCompileWebpackPlugin(),
        new EmitWebpackPlugin(),
        new DoneWebpackPlugin()
    ]
}