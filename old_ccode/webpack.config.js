const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: "/dist/",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 3002,
    proxy: [
      {
        context: ["/api/**"],
        secure: false,
        changeOrigin: true,
        target: "http://localhost:3005",
      },
    ],
    open: true,
  },
};
