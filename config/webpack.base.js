const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname,".." ,"build"),
    publicPath: "/",
    assetModuleFilename: 'assets/images/[hash][ext]'
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            // make all svg images to work in IE
            iesafe: true,
          },
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".jsx", ".react.js"],
    mainFields: ["browser", "jsnext:main", "main"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "public", "index.html"),
      inject: true,
    }),
  ],
};
