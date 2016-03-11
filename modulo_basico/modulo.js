'use strict';

var objeto = {
	vuela : function() {
		console.log('volando voy');
	}
}

module.exports = objeto;

// modo alternativo: asignar cosas a , 'exports con nombre'
// exports.objeto = objeto;

// module.exports = {
// 	objeto1: objeto,
// 	objeto2: {
// 		nada: function() {console.log('nadando voy');}
// 	}
// };