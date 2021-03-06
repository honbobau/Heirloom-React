var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.resolve(__dirname, 'src', 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index_bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
        loaders: ['react-hot','babel'], // The module to load. "babel" is short for "babel-loader"
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin()
  ]
};

module.exports = config;