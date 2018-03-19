const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const WebpackWithimgPlugin = require('webpack-withimg-plugin')

let pages = ['index', 'base'];
pages = pages.map(page => new HtmlWebpackPlugin({
  template: './src/index.html',//指定产的HTML模板
  filename: `${page}.html`,//产出的HTML文件名
  title: `${page}`,
  chunks: ['common', `${page}`],//在产出的HTML文件里引入哪些代码块
  hash: true,// 会在引入的js里加入查询字符串避免缓存,
  minify: {
    removeAttributeQuotes: true
  }
}));

//放一个对象，多入口
module.exports = {
  entry:'./src/main.js',//['./src/index.js','./src/base.js'],
  output:{
    path:path.join(__dirname,'dist'),
    filename:'[name].[hash:8].js'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        loader:['style-loader','css-loader']
      },
      {
        test: require.resolve('jquery'),
        use:{
          loader: 'expose-loader',//可以通过？传参
          options:'$'//也可以通过option传参
        }
      },
      {
        test: /\.(png|jpg|gif|svg|bmp)/,
        use: 'file-loader'
      },
      {
        test:/\.(html|htm)/,
        loader:'html-withimg-loader'
      }
    ]
  },
  plugins:[
    //用来自动向模块内部侏儒变量
    new webpack.ProvidePlugin({
      $:'jquery'
    }),
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
    new CleanWebpackPlugin([path.join(__dirname, 'dist')])
  ],
  devServer:{
    contentBase:'./dist',
    host:'localhost',
    port:8080,
    compress:true,//服务器返回给浏览器的时候是否启动gzip压缩
  }
}