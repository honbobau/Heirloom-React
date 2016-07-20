var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var config = {
  entry: [
    path.resolve(__dirname, 'src', 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index_bundle.js',
    publicPath: '/'
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
    new HtmlWebpackPlugin()
  ]
};

module.exports = config;