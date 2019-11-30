const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    compress: true,
    port: 9000
  },
  entry: './test/manual/index.js',
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
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
  }
}
