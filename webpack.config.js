var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");

// ./src/js/client.js を起点にファイル内部のimport 構文を読み取り
// それらソースコードをモジュールバンドリングしていくようになります。
// cf: https://qiita.com/TsutomuNakamura/items/72d8cf9f07a5a30be048

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./js/client.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js",
  },
  plugins: debug
    ? []
    : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          mangle: false,
          sourcemap: false,
        }),
      ],
};
