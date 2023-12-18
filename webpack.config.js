module.exports = {
  entry: './script/index.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [
          'babel'
        ],
        include: './index.js',
        query: {
          presets: [
            'es2015'
          ]
        }
      }
    ]
  }
}