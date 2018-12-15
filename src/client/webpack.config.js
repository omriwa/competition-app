const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

// // CONSOLE LOG
console.log("##############");
console.log("start react webpack configuration");
console.log("##############");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "index.html"
});

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].js',
    path: path.resolve("../../", 'dist/public')
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [htmlPlugin],
  resolve: {
    extensions: [".js", ".json", ".ts", ".jsx", ".tsx"],
  },
  devtool: "source-map"
};
