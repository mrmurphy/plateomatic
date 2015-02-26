var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack-hmr.config');

new WebpackDevServer(webpack(config), {
  contentBase: __dirname + '/static/',
  hot: true
}).listen(3007, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at 0.0.0.0:3007');

});
