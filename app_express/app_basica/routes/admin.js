'use strict';

var express = require('express');
var router = express.Router();

router.get('/:id([0-9]+)/piso/:piso(A|B|C)', function(req, res) {
	// parámetro con regexp
	// params { id: '26', piso: 'A' }
	console.log(req.params);
	res.send('Hola express REGEX')
}); 

router.get('/:id([0-9]+)', function(req, res) {
	// parámetro con regexp
	// params { id: '26'}
	console.log(req.params);
	res.send('Hola express REGEX')
}); 

router.get('/:id', function(req, res) {
	// http://localhost:3000/admin/5
	console.log(req.params);
	res.send('Hola express v2');
});

router.get('/', function(req, res) {
	// http://localhost:3000/admin/?hola=26
	console.log(req.query);
	res.send('Hola express'); //MIDDLEWARE
});

router.post('/', function(req, res) {
	// post a http://localhost:3000/admin
	console.log(req.body);
	res.send('body recogido');
});


module.exports = router;