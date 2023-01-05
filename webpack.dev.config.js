const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // will clean dist folder before every build
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: "defer",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    devMiddleware: {
      index: true,
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/i,
        type: "asset",
        generator: {
          filename: "images/[hash][ext][query]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
      {
        test: /\.txt$/i,
        type: "asset/source",
      },
      //   {
      //     test: /\.(png|jpg)$/i,
      //     type: "asset/inline", /*convert resource binary64 */
      //   },
      //   {
      //     test: /\.(png|jpg)$/i,
      //     type: "asset", /* auto detects to use asset/resource or asset/inline if asset size is less than 8kb will treat
      //                       as asset line
      // */
      //   },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 0,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
