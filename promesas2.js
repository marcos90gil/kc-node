'use strict';

function conArroz(plato) {

	return new Promise(function(resolve, reject) {
		resolve(plato + ' arroz');
	});

}

function conAjo(plato) {

	return new Promise(function(resolve, reject) {
		resolve(plato + ' ajo');
		//reject('no hay ajo');
	});

}

function conSal(plato) {

	return new Promise(function(resolve, reject) {
		resolve(plato + ' sal');
	});

}


function con(plato, ing) {

	return new Promise(function(resolve, reject) {
		resolve(plato + ' ' + ing);
	});

}

var paella = 'paella con';

// Promesas encadenadas
conArroz(paella)
	.then(conAjo)
	.then(conSal)
	.then(function(plato) {
		console.log('TRACE', plato);
		return plato;
	})
	.then(function(plato) {
		return con(plato, 'marisco');
	})
	.then(function(plato) {
		console.log('Plato:', plato);
	})
	.then(function(algo) {
		console.log(algo);
	})
	.catch(function(err) {
		console.error('ERROR', err);
	});

