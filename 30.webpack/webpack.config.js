const path  = require('path')
const HappyPack = require('happypack')
//1.尽量减小搜索范围

module.exports = {
  extry:'./src/index.js',
  output:{
    path:path.join(__dirname,'dist'),
    filename:'bundle.js'
  },
  //当你引入一个模块时，要进行解析，resolve配置解析目录
  resolve:{
    alias:{
      react:path.resolve('./cjs/react.production.min.js')
    },
    extension:['js','json'],
    mainFields:['main','browser','node'],
    modules:['node_modules',path.resolve('lib')]
  },
  module:{
    noParse:[/react\.production\.min\.js/],//不需要递归解析
    rules:[
      {
        test:/\.js?$/,
        use:'happypack/loader?id=babel',
        // [
        //   {
        //     loader:'babel-loader',
        //   }
        // ],
        //只转换或者编译src 目录下的文件
        include:'./src',
        exclude:/node_modules/ //不解析node_modules
      },
      {
        test:/\.css?$/,
        use:'happypack/loader?id=css',
        // [
        //   {
        //     loader:'cdd-loader',
        //   }
        // ],
        //只转换或者编译src 目录下的文件
        include:'./src',
        exclude:/node_modules/ //不解析node_modules
      }
    ]
  },
  plugins:[
    new HappyPack({
      id:'css',
      loaders:['style-loader','css-loader']
    }),
    new HappyPack({
      id:'babel',
      loaders:['babel-loader']
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.join(__dirname, 'dist', 'react.manifest.json')),
    })
  ]
}