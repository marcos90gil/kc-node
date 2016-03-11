'use strict';

var express = require('express');
var router = express.Router();
//var user = require('../models/user_model.js'); lo pasamos a app.js
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/form', function(req, res, next) {
	
	var User = mongoose.model('User');
	User.list(function(err, rows) {
		// cuando estén disponibles mando la vista
		res.render('user_form', {users: rows});	
	});

	// user.getUsers(function(err, users){
	// 	// cuando estén disponibles mando la vista
	// 	res.render('user_form', {users: users});
 //  	});
	// //res.render('user_form', {users: user.getUsers()});

});

module.exports = router;
