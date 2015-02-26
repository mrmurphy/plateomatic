var webpack = require('webpack');
var os = require('os')
var autoprefixer = require('autoprefixer-core');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://' + os.hostname() + ':3007',
    'webpack/hot/dev-server',
    './src/index.jsx',
  ],

  output: {
    path: __dirname + '/static/',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js', '.json', '.jsx', 'index.jsx', 'index.js', '.styl', '.es6.js']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/,          loader: 'react-hot!6to5'                    },
      { test: /\.es6.js?$/,          loader: '6to5'                    },
      { test: /\.styl$/,          loader: 'style-loader!css-loader!postcss-loader!stylus-loader' },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'                 },
      { test: /\.json$/,          loader: 'json' }
    ],
  },

  postcss: [ autoprefixer({ browsers: ['last 2 version']  })  ]
};
