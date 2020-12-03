const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("../app-end/node_modules/.pnpm/registry.npmjs.org/clean-webpack-plugin/3.0.0_webpack@4.42.0/node_modules/clean-webpack-plugin/src/clean-webpack-plugin");

module.exports = {
  entry: "./lib/es6/src/Index.bs.js",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  output: {
    path: path.join(__dirname, "build/"),
    filename: "[name].[chunkhash].js"
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.(png|jpg|svg)$/, use: "url-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(["build"], {
      watch: true
    })
  ]
};
