// Load app config
var config = require('./app/config.json');

// Register new plugin
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: config.title,
  template: './app/index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}