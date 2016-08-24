var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

var path  = 'docs';
var serve = serveStatic(path, { index: 'index.html' });

var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res));
});

var port = process.env.PORT || 3000;
server.listen(port);

console.log('Serving /' + path + ' at port ' + port);
