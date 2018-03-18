const path = require('path');

module.exports = {
  entry:'./src/index.js',
  output:{
    path:path.join(__dirname,'dist'),
    filename:'[name].[hash:8].js'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        loader:['style-loader','css-loader']
      }
    ]
  },
  plugins:[
    
  ],
  devServer:{
    contentBase:'./dist',
    host:'localhost',
    port:8080,
    compress:true,//服务器返回给浏览器的时候是否启动gzip压缩
  }
}