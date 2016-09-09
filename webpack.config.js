const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      React: "react"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
  ],

  resolve: {
    extensions: ['', '.web.js', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: ['node_modules']
      }
    ]
  }
};
