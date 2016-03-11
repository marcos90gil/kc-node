'use strict';

var client = require('mongodb').MongoClient;
var dbConnection = {
	db: null
};

client.connect('mongodb://localhost:27017/cursonode', function(err, conn) {
 		if (err) {
 			console.error('Can\'t connect to database');
 			process.exit();
 		}
		console.log('Connected to', conn.databaseName, 'on', conn.options.url);
		dbConnection.db = conn;
});

module.exports = dbConnection;
