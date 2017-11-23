let path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: JSON.stringify({
            cacheDirectory: true,
            presets: ['es2015', 'react'],
            plugins: [
              'transform-object-rest-spread',
              'transform-class-properties'
            ]
          })
        }]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.woff$|.woff2$|.ttf$|.eot$|.svg$/,
        loader: 'url-loader'
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  }
};
