const webpack = require('webpack'),
path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
OpenBrowserPlugin = require('open-browser-webpack-plugin'),
port = '8000';

const BUILD_DIR = path.resolve(__dirname,'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
entry: [
  path.resolve(__dirname, 'example/index.js')
],
output: {
  path: BUILD_DIR,
  filename: 'bundle.js',
  publicPath: '/'
},
resolve: {
  alias: {
    '@': APP_DIR,
  }
},
module: {
  rules: [
      {
          test: /\.js$/,
          loader: 'babel-loader'
      }
  ]
},
devServer: {
  inline: true,
  port: port
},
plugins: [
  new HtmlWebpackPlugin({
      template: './example/index.html'
  }),
  new webpack.HotModuleReplacementPlugin(),

  //指定自动开启服务的浏览器
  new OpenBrowserPlugin({ url: 'http://localhost:'+port+'' })
]
}