var koa = require('koa');
var serve = require('koa-static');

var PORT = process.env.NODE_PORT || 3008;
var app = koa();
app.use(serve('./static'));
app.listen(PORT);
console.log('server listening on port ' + PORT);
