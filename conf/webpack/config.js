const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  entry: {
    app: path.resolve('src/index.js'),
    hmr: [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack-dev-server/client?http://localhost:8080',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
    ],
  },
  output: {
    path: path.resolve('dist'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
  },
  resolveLoader: {
    modules: [path.resolve('src'), path.resolve('node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: [{
            loader: 'css-loader',
            options: { importLoaders: 1, modules: true },
          }, {
            loader: 'sass-loader',
          }, {
            loader: 'postcss-loader',
          }],
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff2|woff)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  target: 'web',
};
