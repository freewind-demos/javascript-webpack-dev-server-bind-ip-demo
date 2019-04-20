module.exports = {
  mode: "development",
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js'
  },
  devServer: {
    host: '0.0.0.0'
  }
}
