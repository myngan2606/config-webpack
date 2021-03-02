const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const devServer = {
  port: 4000,
  open: true,
  index: "index.html",
  // watchContentBase: false,
};

const VENDOR_LIBS = ["react", "react-dom"];

module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS,
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: "/node-modules/",
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/,
      },
      {
        use: [
          {
            loader: "file-loader",
          },
          {
            loader: "url-loader",
          },
        ],
        test: /\.(png|jpg|jpeg|svg|gif)$/,
      },
    ],
  },
  devServer,
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
  plugins: [new CleanWebpackPlugin()],
};
