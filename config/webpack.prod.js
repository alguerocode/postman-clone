const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const webpackBase = require("./webpack.base.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



// configuration of production webpack settings
module.exports = merge(webpackBase, {
  mode: "production",
  output: {
    clean: true,
    filename: "assets/js/[name].[fullhash].js",
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            configFile: path.resolve(__dirname,".." ,"babel.config.js"),
            cacheDirectory: true,
            cacheCompression: true,
            envName:'production'
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources:true,
          minimize:true
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            comparisons: false,
            drop_console: true,
          },
          mangle: {
            safari10: true,
          },
          output: {
            comments: false,
            ascii_only: true,
          },
          warnings: false,
        },
      }),
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: "all",
      minSize: 0,
      maxInitialRequests: 20,
      maxAsyncRequests: 20,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module, chunks, cacheGroupKey) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `${cacheGroupKey}.${packageName.replace("@", "")}`;
          },
        },
        common: {
          minChunks: 2,
          priority: -10,
        },
      },
    },
    runtimeChunk: "single",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[fullhash].css",
      chunkFilename: "assets/css/[name].[contenthash:8].chunk.css",
    }),
  ],
  performance: {
    hints: false,
  }
});
