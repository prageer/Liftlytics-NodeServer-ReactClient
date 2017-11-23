let webpack = require('webpack');
let path = require('path');

module.exports = {

  /* When running webpack-dev-server with javascript not console,
  for using HotReloadingModule, it is needed to insert dev-server client
  and hot module to entry. */

  entry: [
    './src/index.js',
    /* The port on the development server must be entered in this section to
       work properly. */
    'webpack-dev-server/client?http://0.0.0.0:4000',
    'webpack/hot/only-dev-server'
  ],

  output: {
    path: '/', // "/" not "public", it stores files in memory to be used.
    filename: 'bundle.js'
  },
  devtool: 'source-map',


  // dev server settings
  devServer: {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './public/index.html',
    /* all requests are proxied to receive the response,
    if it is bundle file, program use script of dev server. */
    proxy: {
      '**': 'http://localhost:5000' // express server address
    },
    stats: {
      // minimize console log
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {loader: 'react-hot-loader'},
          {loader: 'babel-loader',
            options: JSON.stringify({
              cacheDirectory: true,
              presets: ['es2015', 'react'],
              plugins: [
                'transform-object-rest-spread',
                'transform-class-properties'
              ]
            })
          }
        ]
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
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  }
};
