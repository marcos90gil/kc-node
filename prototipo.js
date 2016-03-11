'use strict';

// hacer función constructora
var persona = function(name){
	this.name = name;
};

// crear una instancia
var luis = new persona('Luis');
console.log(luis.name);

// cambiar su prototipo
persona.prototype.saluda = function(){
	console.log(this.name + ' te saluda!');
};

luis.saluda();

var pepe = new persona('Pepe');

pepe.saluda();

////////// HERENCIA

// otra función constructora que hereda de persona, formato para usar new
var Agente = function(name) { 
	// ejecutamos constructor heredado (llamar a super)
	persona.call(this, name);
};

Agente.prototype = new persona('prototipo');

// creamos un nuevo Agente
var smith = new Agente('Smith');

// comprobamos que tiene los métodos de persona
smith.saluda();


var extend = require('util')._extend;
var EventEmitter = require('events').EventEmitter;

//console.log(EventEmitter);

Agente.prototype = extend(Agente.prototype, EventEmitter.prototype);

var jose = new Agente('Jose');

//console.log(Object.getPrototypeOf(jose));

jose.on('llamada de telefono', function(data) {
	console.log('brr brr', data);
});

jose.emit('llamada de telefono', {payload: 2000});

var terminator = new Agente('terminator');

terminator.on('fin de programa', function(data) {
	console.log('Termina el programa', data);
});

process.on('exit', function() {
	jose.emit('fin de programa','Se acaba');
});
