var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./");

var server = http.createServer(function(req, res){
  var done = finalhandler(req, res)
  serve(req, res, done)
});

server.listen(8000);
console.log('Listening to 127.0.0.1:8000');