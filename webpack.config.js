const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");
const webpack = require('webpack');

const basePath = '/test'

module.exports = (argv) => {
  const prod = argv.mode === "production";

  return {
    mode: prod ? "production" : "development",
    devtool: prod ? "hidden-source-map" : "eval",
    entry: "." + basePath +  "/src/index.tsx",
    output: {
      path: path.join(__dirname, basePath, "/build"),
      filename: "index.js",
    },
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true,
      allowedHosts: "all",
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ["babel-loader", "ts-loader"],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new webpack.DefinePlugin({
        'process.env.LABLE_BACKEND_URL': JSON.stringify(process.env.LABLE_BACKEND_URL),
        'process.env.LABLE_BACKEND_KEY': JSON.stringify(process.env.LABLE_BACKEND_KEY)
      }),
      new HtmlWebpackPlugin({
        template: '.' + basePath + '/public/index.html',
        minify: process.env.NODE_ENV === 'production' ? {
          collapseWhitespace: true,
          removeComments: true,
        } : false,
      }),
      new CleanWebpackPlugin(),
    ],
  }
};