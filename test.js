var assert = require('assert');
var cbc = require('./');

var returns = [];

var c = cbc(function () {
	console.log('all callbacks collected');
	assert.deepEqual(returns, [2, 1, 0]);
});

setTimeout(c(function () {
	console.log('timer0');
	returns.push(0);
}), 2000);

setTimeout(c.add(function () {
	console.log('timer1');
	returns.push(1);
}), 1000);

setTimeout(c(function () {
	console.log('timer2');
	returns.push(2);
}), 500);
