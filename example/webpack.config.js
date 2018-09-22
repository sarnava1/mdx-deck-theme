module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader/locals']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)/,
        use: ['file-loader']
      }
    ]
  }
}
