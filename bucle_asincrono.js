'use strict';

var async = require('async');

console.log('---> Empiezo');

var escribeTras2Segundos = function(texto, callbackNuestro) {
	setTimeout(function(){
		console.log(texto);
		callbackNuestro();
	}, 2000);
};

async.eachSeries([1,2,3,4,5], 
	function(item, siguiente){
		escribeTras2Segundos(item, function(){
			var res = item % 2 ? null : 'error';
			siguiente(res);
		});
	}, 	function fin(err){
		console.log('FIN', err);
	}
);

// function serie(i){
// 	escribeTras2Segundos('texto' + i, function(){
// 		i--;
// 		if (i == 0) {
// 			return console.log('---> FIN');
// 		}
// 		serie(i);
// 	});
// }
// serie(5);

// function serie(i, fn){
// 	fn('texto' + i, function(){
// 		i--;
// 		if (i == 0) {
// 			return console.log('---> FIN');
// 		}
// 		serie(i, fn);
// 	});
// }
// serie(5, escribeTras2Segundos);

// function serie(arr, fn){	
// 	if (arr.length == 0) {
// 			return console.log('---> FIN');
// 		}
// 	fn(arr.shift(), function(){
// 		serie(arr, fn);
// 	});
// }
// serie([1,2,3,4,5], escribeTras2Segundos);
