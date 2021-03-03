const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: { bundle: "./src/index.js" },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader", "eslint-loader"],
        exclude: [/node_modules/],
      },

      {
        test: /\.(s[ac]ss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        loader: "file-loader",
      },
    ],
  },

  devServer: {
    port: 4000,
    open: true,
    index: "index.html",
    watchContentBase: false,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Electric Bill printer",
      template: path.resolve(__dirname, "index.html"),
      meta: [
        {
          name: "description",
          content: "Electric Bill printer",
        },
      ],
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      _components: path.resolve(__dirname, "src/components/"),
      _assets: path.resolve(__dirname, "src/assets/"),
    },
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
