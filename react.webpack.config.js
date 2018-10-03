// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

// // CONSOLE LOG
// console.log("##############");
// console.log("start react webpack configuration");
// console.log("##############");

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: '[name].js',
//     path: path.resolve("../../", 'dist/public')
//   },
//   module: {
//     rules: [
//       { test: /\.css$/, use: 'css-loader' },
//       { test: /\.ts$/, use: 'ts-loader' },
//       {
//         test: /\.(js|tsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       },
//     ]
//   },
//   plugins: [
//     new webpack.ProgressPlugin()
//     // new HtmlWebpackPlugin({
//     //   template: './src/public/index.html',
//     //   filename: "../../dist/public/index.html"
//     // })
//   ]
// };
