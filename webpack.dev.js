const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    publicPath: '/',
  },
  devServer: {
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  entry: './test/manual/index.js',
  externals: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './test/manual/index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
  }
}
