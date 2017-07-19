const EventEmitter = require('events');

var myEmitter = new EventEmitter();
var greet = new EventEmitter();

myEmitter.on('my-event', function(message) {
	console.log(message);
});

greet.on('greetings', function(name) {
	console.log(name);
});


myEmitter.emit('my-event', 'hello');
greet.emit('greetings', 'welcome kami');