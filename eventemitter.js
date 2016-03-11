'use strict';

// var events = require('events');
// var EventEmitter = new events.EventEmitter();

var eventEmitter = new (require('events')).EventEmitter();

eventEmitter.on('llamada de telefono', function() {
	console.log('ring rang');
});

eventEmitter.on('llamada de telefono', function() {
	console.log('brr brr');
});

eventEmitter.emit('llamada de telefono');