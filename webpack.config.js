var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");

// ./src/js/client.js を起点にファイル内部のimport 構文を読み取り
// それらソースコードをモジュールバンドリングしていくようになります。
// cf: https://qiita.com/TsutomuNakamura/items/72d8cf9f07a5a30be048

const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
});

module.exports = {
  entry: "./index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    port: 3000,
  },
  plugins: [htmlPlugin],
};
