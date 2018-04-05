const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
<<<<<<< HEAD
=======
const CompilationPlugin = require('./src/plugins/CompilationPlugin')
>>>>>>> 44d1dc1b4333e4471e358e23f4010eff12011771
const HelloPlugin = require('./src/plugins/HelloPlugin');
const EmitPlugin = require('./src/plugins/EmitPlugin');
const FilesPlugin = require('./src/plugins/FilesPlugin');
const InlinePlugin = require('./src/plugins/inline-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
<<<<<<< HEAD
    // 配置查找loader的目录 
=======
    // 配置查找loader的目录
>>>>>>> 44d1dc1b4333e4471e358e23f4010eff12011771
    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src', 'loaders')
        ]
    },
    module: {
<<<<<<< HEAD
        rules: 
        [
            {
=======
        rules:
        [
            /* {
>>>>>>> 44d1dc1b4333e4471e358e23f4010eff12011771
                test: /\.js$/,
                use: {
                    loader:path.resolve(__dirname, 'src', 'loaders', 'log-loader'),
                    options:{
                        content:'===============loading=================='
                    }
                }
<<<<<<< HEAD
            },
            {
=======
            }, */
            /*   {
>>>>>>> 44d1dc1b4333e4471e358e23f4010eff12011771
                  test: /\.js$/,
                  use: {
                      loader: path.resolve(__dirname, 'src', 'loaders', 'banner-loader'),
                      options: {
                          copyright: './banner.js'
                      }
                  }
<<<<<<< HEAD
            },
=======
              }, */
>>>>>>> 44d1dc1b4333e4471e358e23f4010eff12011771
            {
                test: /\.less$/,
                use: ['style-loader', 'less-loader']
            },
            {
                test:/\.html$/,
                use:{
                    loader:'html-layout-loader',
                    options:{
                        layout:path.resolve(__dirname,'src/layout.html'),
                        placeholder:'{{__content__}}',
                        decorator:'layout'
                    }
                }
<<<<<<< HEAD
            },
        ]
    },
    plugins: [
        /* new HtmlWebpackPlugin({
            template: './src/login.html',
            filename: 'login.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/home.html',
            filename: 'home.html'
        }),
        new HelloPlugin({name:'zfpx'}),
        new EmitPlugin(),
        new FilesPlugin({
            filename:'files-list.md'
        }) */
=======
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './src/login.html',
        //     filename: 'login.html'
        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/home.html',
        //     filename: 'home.html'
        // }),
        // new HelloPlugin({name:'zfpx'}),
        // new EmitPlugin(),
        new FilesPlugin({
            filename:'files-list.md'
        }),
>>>>>>> 44d1dc1b4333e4471e358e23f4010eff12011771
        new HtmlWebpackPlugin({
            tempalte:'./src/index.html',
            filename:'index.html'
        }),
<<<<<<< HEAD
=======
        new HelloPlugin({
            name:'zfpx'
        }),
        new CompilationPlugin(),
>>>>>>> 44d1dc1b4333e4471e358e23f4010eff12011771
        new InlinePlugin()
    ]
}