'use strict';

var fs = require('fs');
var async = require('async');

console.log('---> Empiezo');

var moduleVersion = function(dir, callbackModulo){

	fs.readFile('./package.json' , {encoding: 'utf8'}, function(err, data){
		
		if (err) {
			return callbackModulo(err);
		}

		var pack = JSON.parse(data);
		var res = [pack.name, pack.version];
		
		callbackModulo(err, res);

	});

};

var allModulesVersions = function(dir){

	// moduleVersion(dir, function(err, res){
	// 	if (err) {
	// 		console.error('Hubo un error: ', err);
	// 		return;
	// 	}
	// 	console.log('Módulo:', res[0], 'Versión:', res[1]);
	// });
	
	var files = fs.readdirSync(dir);
	
	async.forEach(files,
		function(item){
			if (item !== '*.js'){
				moduleVersion(item)
			}
		}, function done(err){
			console.log('FIN', err);
		}
	);
	// for (var i=0; i < files.length; i++) {
	// 	if (files[i] === '.DS_Store') {
	// 		if (i > -1) {
 // 			   files.splice(i, 1);
	// 		}
	// 	}
	// }


};

// async.map(files, 
// 	function(item, siguiente){
// 		escribeTras2Segundos(item, function(){
// 			var res = item % 2 ? null : 'error';
// 			siguiente(res);
// 		});
// 	}, 	function fin(err){
// 		console.log('FIN', err);
// 	}
// );

allModulesVersions('./');