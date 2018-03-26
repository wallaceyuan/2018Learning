const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),//输出的文件夹，只能是绝对路径
        //name是entry名字main,hash根据打包后的文件内容计算出来的一个hash值
        filename: '[name].js' //打包后的文件名
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use:[
                    { loader:"style-loader"},
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',//指定产的HTML模板
            filename: `index.html`,//产出的HTML文件名
            title: 'index',
            hash: true,// 会在引入的js里加入查询字符串避免缓存,
            minify: {
                removeAttributeQuotes: true
            }
        }),
    ]
}