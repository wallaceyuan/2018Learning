const path  = require('path')
const webpack = require('webpack')
//target _dll 是制定的导出变量名称

module.exports = {
    entry: {
        react: ['react','react-dom'] //react模块打包到一个动态连接库
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_dll.js', //输出动态连接库的文件名称,
        // libraryTarget:'var',
        library: '_dll_[name]' //全局变量名称
    },
    plugins: [
        new webpack.DllPlugin({
            name: '_dll_[name]', //插件名和output.library中一致，值就是输出的manifest.json中的 name值
            path: path.join(__dirname, 'dist', 'manifest.json')//描述文件
        })
    ]
}