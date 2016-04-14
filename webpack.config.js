var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: 'Resume'
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