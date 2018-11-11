const path  = require('path')

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
    plugins:[]
}