const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const path = require("path");

const getConfigs = name => (env = {}) => {
  const isModern = name === 'modern'
  return {
    mode: "development",
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `index.${name}.js`
    },
    module: {
      rules: [{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", options: {envName: name}}]
    },
    plugins: [
      env.analyze && new BundleAnalyzerPlugin(),
    ].filter(Boolean)
  }
}

module.exports = [getConfigs('modern'), getConfigs('legacy')];
