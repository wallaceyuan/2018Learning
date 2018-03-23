const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry:'./src/index.js',
  output:{
    path:path.resolve('dist'),
    filename:'bundle.js'
  },
  devServer:{
    inline:true,
    hot:true
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
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}