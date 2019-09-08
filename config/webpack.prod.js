const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackDeployPlugin = require("html-webpack-deploy-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    "assets/test": "./app/index"
  },
  mode: "production",
  output: {
    filename: "assets/app-[contentHash].js",
    path: path.resolve(__dirname, "../dist")
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_CONFIG": JSON.stringify("prod")
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./app/template.html",
      filename: "index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new HtmlWebpackDeployPlugin({
      assets: {
        copy: [
          { from: "assets/css", to: "/css" },
          { from: "assets/fonts", to: "/fonts" },
          { from: "assets/js", to: "/js" },
          { from: "assets/libs", to: "/libs" }
        ],
        links: [
          { path: "css/bootstrap.min.css" },
          { path: "css/icons.min.css" },
          { path: "css/app.min.css" }
        ],
        scripts: [
          { path: "js/vendor.min.js" },
          { path: "libs/jquery-ui.min.js" },
          { path: "js/kanban.init.js" },
          { path: "js/app.min.js" }
        ]
      }
    }),
    new MiniCssExtractPlugin({ filename: "assets/style-[contentHash].css" })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
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
            name: "assets/images/[folder]/[name].[ext]",
            outputPath: "./"
          }
        }
      }
    ]
  }
};
