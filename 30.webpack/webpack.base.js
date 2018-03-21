const path = require('path')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

//1.尽量减小搜索范围

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    //当你引入一个模块时，要进行解析，resolve配置解析目录
    resolve: {
        alias: {
            // 当加载react模块的时候，
            //'react': path.resolve(__dirname,'./node_modules/react/cjs/react.production.min.js'),
            //'react-dom': path.resolve(__dirname, './node_modules/react-dom/cjs/react-dom.production.min.js'),
            //'react': path.resolve(__dirname, './node_modules/react/cjs/react.production.min.js')
        },
        extensions: ['.js', '.json'],
        mainFields: ['main', 'node', 'browser'],
        //当你需要指定除node_modules之外的其它模块目录 的话
        modules: [path.resolve('node_modules'), path.resolve('lib')]
    },
    module: {
        noParse: [/react\.production\.min\.js/],//不需要递归解析
        rules: [
            {
                test: /\.jsx?$/,
                use: 'happypack/loader?id=babel',
                // [
                //    {
                //      loader:'babel-loader',
                //    }
                // ],
                //只转换或者编译src 目录下的文件
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/ //不解析node_modules
            },
            {
                test: /\.css?$/,
                use: 'happypack/loader?id=css',
                //  [
                //    {
                //      loader:'css-loader',
                //    }
                //  ],
                //只转换或者编译src 目录下的文件
                include: path.resolve(__dirname, 'src'),
            }
        ]
    },
    plugins: [
        //定义环境变量
        new webpack.DefinePlugin({
            __development__: JSON.stringify(process.env.NODE_ENV)
        }),
        new WebpackParallelUglifyPlugin({
            workerCount: 3, //开启几个子进程去并发的执行压缩。默认是当前运行电脑的 CPU 核数减去1
            uglifyJS: {
                output: {
                    beautify: false, //不需要格式化
                    comments: false, //不保留注释
                },
                compress: {
                    warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
                    drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
                    collapse_vars: true, // 内嵌定义了但是只用到一次的变量
                    reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值
                }
            }
        }),
        //new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
        new HtmlWebpackPlugin({
            template: './src/index.html',//指定产的HTML模板
            filename: 'index.html',//产出的HTML文件名
            title: 'index',
            chunks: ['main'],//在产出的HTML文件里引入哪些代码块
            hash: true,// 会在引入的js里加入查询字符串避免缓存,
            minify: {
                removeAttributeQuotes: true
            }
        }),
        new HappyPack({
            id: 'css',
            loaders: ['style-loader', 'css-loader']
        }),
        new HappyPack({
            id: 'babel',
            loaders: ['babel-loader']
        }),
        new webpack.DllReferencePlugin({
            manifest: require(path.join(__dirname, 'dist', 'manifest.json')),
        })
    ],
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 8080,
        compress: true,//服务器返回给浏览器的时候是否启动gzip压缩
    }
}