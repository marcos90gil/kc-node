'use strict';

var http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(200, { 'content-Type' : 'text/plain' });

	response.end('Hola node\n');
});

server.listen(1337, '127.0.0.1'); //Binding
console.log('Servidor arrancado en http//:127.0.0.1:1337');