const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    // kanbanvendor: "./assets/js/vendor.min.js",
    projectmanager: "./app/index.js"
  },
  output: {
    filename: "[name]-chunk-[chunkHash].js",
    chunkFilename: "[name]-chunk-[chunkHash].js",
    path: path.resolve(__dirname, "dist")
    //publicPath: "/project-manager/"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial"
        }
      }
    },
    runtimeChunk: {
      name: "manifest"
    }
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true
    // public: "localhost:8080/project-manager",
    // publicPath: "/project-manager/"
    //contentBase: "./dist/"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_CONFIG": JSON.stringify("dev")
    }),
    new HtmlWebpackPlugin({
      template: "./app/template.html",
      inject: true,
      chunks: ["projectmanager", "vendor", "manifest" /* , "kanbanvendor" */],
      filename: "index.html"
    }),
    new HtmlWebpackTagsPlugin({
      tags: [
        "./assets/css/bootstrap.min.css",
        "./assets/css/icons.min.css",
        "./assets/css/app.min.css"
      ],
      append: true
      //usePublicPath: true
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
