'use strict';

//var conn = require('../lib/connectMongo.js'); //conectar con driver
var conn = require('../lib/connectMongoose.js');
var mongoose = require('mongoose');

// Creo el esquema
var userSchema = mongoose.Schema({
	name: String,
	age: Number
});

userSchema.statics.list = function(sort, cb) {
	// preparamos las query sin ejecutar
	var query = User.find({});
	// añadimos más parámetros a la query y ejecutamos
	query.sort(sort);
	query.exec(function(err, rows){
		if (err) {
			return cb(err);
		}
		return cb(null, rows);		
	});
};

// Lo registro en mongoose
var User = mongoose.model('User', userSchema);

/* Antiguo ejemplo sin usar el modelo
var user = {
	getUsers: function(cb) {
		//imaginamos que lee un fichero
		var usuariosLeidos = users;
		//conectando con driver
		db.collection('agentes').find({}).toArray(function(err, usuariosLeidos) {
 			if (err) {
 				cb(err);
 				return; // donde llamas a un cb debe haber un return, trigger para el cerebro
 			}
			// devuelvo users
		cb(null, usuariosLeidos);
		return;
 		});
 		//conectando con mongoose
 		var User = mongoose.model('User');
 		User.find({}, function(err, datos) {
 			if (err) {
 				return cb(err);
 			}
 			cb(null, datos);
 			return;
 		});
	}
};

module.exports = user;
*/