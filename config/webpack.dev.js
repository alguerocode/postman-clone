const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const webpackBase = require("./webpack.base.js");


// configuration of development webpack settings
module.exports = merge(webpackBase, {
  mode: "development",
  output: {
    filename: "assets/js/[name].bundle.js",
    chunkFilename: '[name].chunk.js',
  },
  devtool: "eval-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            configFile: path.resolve(__dirname, "..","babel.config.js"),
            cacheDirectory: true,
            cacheCompression: true,
            envName:"development"
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources:true
        }
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    index: "index.html",
    port: 5000,
    compress: true,
    historyApiFallback: true,
    overlay: true,
    watchContentBase: true,
    contentBasePublicPath: path.resolve(__dirname, "public"),
    inline: true,
    open: true,
    progress: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
  performance: {
    hints: true,
  }
});
