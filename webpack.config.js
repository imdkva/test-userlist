const path = require('path');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: 'http://localhost:8001/',
  },

  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'static'),
    publicPath: 'localhost:8001/',
    compress: true,
    port: 8001,
    inline: true,
    hot: false,
    historyApiFallback: true,
    stats: 'minimal'
  },

  resolve: {
    alias: {
        src: path.resolve(__dirname, 'src')
    }
  },

  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" },
      {
        test: /\.(?:png|jpg|gif|ico)$/,
        loader: 'file-loader?name=assets/[name].[ext]'
      },
      {
        test: /\.(?:eot|woff|woff2|ttf|svg)(?:\?v=[\d\w\.]+)?$/,
        loader: 'file-loader?name=assets/[name].[ext]'
      },
    ]
  },

  plugins: [
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
