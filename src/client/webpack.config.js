const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

// // CONSOLE LOG
console.log("##############");
console.log("start react webpack configuration");
console.log("##############");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve("../../", 'dist/public')
  },
  module: {
    rules: [
      // Transform all ES6 files to plain old ES5.
			{
				test: /\.(js|jsx)$/,
				exclude: [ /node_modules/, /styles/],
				loader: 'babel-loader',
				// include: path.resolve(__dirname, '../../src')
			}
    ]
  },
  plugins: [htmlPlugin],
  resolve: {
    extensions: [".js", ".json", ".ts", ".jsx"],
  }
};
