'use strict';

var fs = require('fs');
var async = require('async');

console.log('---> Empiezo');

var versionModulo = function(modulo, callbackModulo){

	fs.readFile('./node_modules/' + modulo + '/package.json' , {encoding: 'utf8'}, function(err, data){
		if (err) {
			return callbackModulo(err);

		}

		var pack = JSON.parse(data);
		
		callbackModulo(err, pack.version);
		console.log('---> FIN');
	});

};

versionModulo('async', function(err, str) {
if (err) {
 console.error('Hubo un error: ', err);
 return;
}
console.log('La version del módulo es:', str);
});