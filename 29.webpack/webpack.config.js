const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExreactTextWebpackPlugin =  require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
//npm i extract-text-webpack-plugin@next -D
let cssExtract = new ExreactTextWebpackPlugin({
  filename:'css.css',
  allChunks:true
})
let lessExtract = new ExreactTextWebpackPlugin('less.css')
let sassExtract = new ExreactTextWebpackPlugin('sass.css')

//提取css文件 extract-text-webpack-plugin

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
  resolve: {
    //引入模块的时候，可以不用扩展名
    extensions: [".js", ".less", ".json"],
    alias: {//别名
      "bootstrap": "bootstrap/dist/css/bootstrap.css"
    }
  },
  watch:false,
  watchOptions:{
    ignored:/node_modules/,
    poll:1000,
    aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
  },
  module:{
    rules:[
      {
        test: require.resolve('jquery'),
        use:{
          loader: 'expose-loader',//可以通过？传参
          options:'$'//也可以通过option传参
        }
      },
      {
        test: /\.(png|jpg|gif|svg|bmp|eot|woff|woff2|ttf)/,
        use: {
          loader: 'url-loader',
          options:{
            limit: 5 * 1024,
            outputPath: 'images/'//指定文件拷贝目录
          }
        }
      },
      {
        test:/\.(html|htm)/,
        loader:'html-withimg-loader'
      },
      {
        test: /\.css$/,
        loader: cssExtract.extract({
          use: [{ loader:'css-loader?minimize'},"postcss-loader"]
        })//['style-loader', 'css-loader']
      },
      {
        test:/\.less$/,
        loader: lessExtract.extract({
          use: ['css-loader?minimize', 'less-loader']
        })//['style-loader', 'css-loader','less-loader']
      },
      {
        test:/\.scss$/,
        loader: sassExtract.extract({
          use: ['css-loader?minimize', 'sass-loader']
        })//['style-loader', 'css-loader','sass-loader']
      },
      {
        test:/\.js/,
        use:{
          loader:'babel-loader',
          options:{
            presets: ["env", "stage-0", "react"]
          }
        }
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
    new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
    cssExtract,
    lessExtract,
    sassExtract,
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'public'),//静态资源目录源地址
      to: path.join(__dirname,'dist','piblic') //目标地址，相对于output的path目录
    }]),
  ],
  // source-map 把映射文件生成到单独的文件，最完整最慢
  // cheap - module - source - map 在一个单独的文件中产生一个不带列映射的Map
  // eval - source - map 使用eval打包源文件模块, 在同一个文件中生成完整sourcemap
  // cheap - module - eval - source - map sourcemap和打包后的JS同行显示，没有映射列
  devtool:"source-map",
  devServer:{
    contentBase:'./dist',
    host:'localhost',
    port:8080,
    compress:true,//服务器返回给浏览器的时候是否启动gzip压缩
  }
}