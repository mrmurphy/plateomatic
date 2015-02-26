var AppCachePlugin = require('appcache-webpack-plugin')
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');

module.exports = {
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/^react$/, 'react/addons'),
    new AppCachePlugin({
      cache: [
        'index.html',
        'bundle.js',
        'vendor/bootstrap.min.css',
        'vendor/ionicons.css',
        'fonts/ionicons.svg',
        'fonts/ionicons.eot',
        'fonts/ionicons.ttf',
        'fonts/ionicons.woff',
       ]
    }),
  ],

  entry: './src/index.jsx',

  output: {
    path: __dirname + '/static',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.es6.js', 'index.js', 'index.jsx', 'index.es6.js', '.styl'],

    modulesDirectories: ['node_modules', 'src']
  },

  module: {
    loaders: [
      { test: /\.jsx$/,           loader: '6to5'             },
      { test: /\.es6\.js$/,       loader: '6to5'             },
      { test: /\.styl$/,          loader: 'style!css!postcss!stylus' },
      { test: /\.css$/,           loader: 'style!css!postcss' },
      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192'   }
    ],
    noParse: /lie.js/
  },

  postcss: [ autoprefixer({ browsers: ['last 2 version']  })  ],

  externals: {
    APIHOST: '""'
  },

  devtool: "#eval"
};
