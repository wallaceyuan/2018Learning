const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const bootstrap = path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    devtool:'source-map',
    resolve: {
        alias: {
            'bootstrap': bootstrap
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve('router'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "env", "stage-0", "react"
                        ]
                    }
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use: ['style-loader', 'less-loader']
            },
            {
                test:/\.(eot|svg|jpg|png|woff|woff2|ttf)$/,
                use:'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}