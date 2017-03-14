const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname)
const SRC_PATH = path.resolve(ROOT_PATH, 'src')
const DIST_PATH = path.resolve(ROOT_PATH, 'dist')
const MODULE_PATH = path.resolve(ROOT_PATH, 'node_modules')

const config = {
  entry: {
    'main': path.resolve(SRC_PATH, 'main')
  },
  output: {
    path: DIST_PATH,
    filename: 'app.[chunkhash].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': SRC_PATH,
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [SRC_PATH]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1024,
          name: 'img/[hash:7].[ext]'
        },
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.[chunkhash].css"),
    new OptimizeCSSPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_PATH, 'index.html')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}

module.exports = config
