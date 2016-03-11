'use strict';

var creaAgente = function(_edad){
	var edad = _edad;
	return {
		ponNombre: function(nuevoNombre) {
			nombre = nuevoNombre;
		},
		leeNombre: function(){
			console.log('Me llamo ' + nombre);
			return nombre;
		},
		ponEdad: function(nuevaEdad) {
			edad = nuevaEdad;
		},
		leeEdad: function(){
			console.log('Yo tengo ' + edad);
			return edad;
		}
	}
}

var agente = creaAgente(30);
var smith = creaAgente(26);

console.log(agente.leeEdad(), smith.leeEdad());