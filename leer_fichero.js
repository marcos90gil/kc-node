'use strict';

// cargar librería
var fs = require('fs');

// leer fichero de texto en utf8 y sacar en consola su contenido
fs.readFile('./package.json', {encoding: 'utf8'}, function(err, data){
	if (err) {
		//console.log('ERROR', err);
		//return;
		return console.log('ERROR', err);
	}

	var pack = JSON.parse(data);

	console.log(data, pack);
	console.log('---> FIN <---');
});
