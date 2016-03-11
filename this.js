'use strict';

// Crear objeto con métodos
var persona = {
	name: 'Marcos',
	surname: 'Gil',
	printName: function(){
		console.log(this.name);
	}
};

var mascota = {
	name: 'Lucky',
	race: 'Maltes',
	printRace: function(){
		console.log(this.race);
	}
};

persona.printName();

// Llamada sin this
setTimeout(persona.printName, 1000);

// Llamada con paréntesis, no funciona porque debemos pasar una función a setTimeout
setTimeout(persona.printName(), 1000);

// Llamada usando binding
setTimeout(persona.printName.bind(persona), 1000);

// Función cualquiera
function saluda(func){
	console.log(this);
	func();
}

//saluda(persona.printName);
saluda(persona.printName.bind(persona));

persona.printName.call(mascota);


