const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    projectmanager: "./app/index.js"
  },
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    open: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_CONFIG": JSON.stringify("dev")
    }),
    new HtmlWebpackPlugin({
      template: "./app/template.html"
    }),
    new HtmlWebpackTagsPlugin({
      tags: [
        "./assets/css/bootstrap.min.css",
        "./assets/css/icons.min.css",
        "./assets/css/app.min.css",
        "./assets/js/vendor.min.js",
        "./assets/libs/jquery-ui.min.js",
        "./assets/js/kanban.init.js",
        "./assets/js/app.min.js"
      ],
      append: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "./assets/images"
          }
        }
      }
    ]
  }
};
