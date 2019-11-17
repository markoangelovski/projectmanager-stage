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
    projectmanager: "./app/index"
  },
  mode: "production",
  output: {
    filename: "assets/[name]-chunk-[contentHash].js",
    chunkFilename: "assets/[name]-chunk-[chunkHash].js",
    path: path.resolve(__dirname, "../stage")
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
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
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_CONFIG": JSON.stringify("stage")
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./app/template.html",
      inject: true,
      chunks: ["projectmanager", "vendor", "manifest"],
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
          { from: "assets/images/JS-logo.svg", to: "/images/JS-logo.svg" },
          { from: "config/stage.txt", to: "../robots.txt" }
        ],
        links: [
          { path: "css/bootstrap.min.css" },
          { path: "css/icons.min.css" },
          { path: "css/app.min.css" }
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
