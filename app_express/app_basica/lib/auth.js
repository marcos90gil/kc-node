'use strict';

var basicAuth = require('basic-auth');

var fn = function(user, pass) {
	return function(req, res, next) {
        var userRequest = basicAuth(req);
        if (!userRequest ||
        	userRequest.name !== 'admin' ||
        	userRequest.pass !== 'pass1')
        {
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            return res.send(401);
        };
        next();
    }
};

module.exports = fn;
