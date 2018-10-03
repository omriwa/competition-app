const webpack = require('webpack')
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const glob = require("glob");
// CONSOLE LOG
console.log("###########")
console.log("#start webpack#")
console.log("###########")


module.exports = {
  entry: {
    server: glob.sync("./src/server/**/*.ts"),
  },
  output: {
    filename: '[name].js',
    path: path.resolve("./", 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  watch: true,
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.ProgressPlugin()]
    ,
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx','.ts']
  },
  node: {
    fs: 'empty',
    child_process: 'empty',
    net: 'empty'
  },
  externals: [nodeExternals()],
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
};
//./node_modules/.bin/babel ./src -w --out-dir javascript_src --extensions .ts && node ./javascript_src/server.js
