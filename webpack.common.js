const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),

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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // devServer: {
  //   contentBase: path.resolve(__dirname, "dist"),
  // },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Electric Bill printer",
      // template: path.resolve(__dirname, "index.html"),
      meta: [
        {
          name: "description",
          content: "Electric Bill printer",
        },
      ],
    }),
  ],

  resolve: {
    // extensions: [".js", ".jsx"],
    alias: {
      _components: path.resolve(__dirname, "./src/components"),
    },
  },
};
