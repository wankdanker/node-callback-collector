callback-collector
------------------

When I was first getting acquainted with node.js, I was experimenting with different
ideas for handling async callbacks. This is one of the ideas I had where you wrap each
of your callbacks in a call to `callback-collector`. `callback-collector` intercepts each
callback and counts the number of still pending callbacks.

Ultimately it is not what I settled on for general use; I do not recall exactly why. But,
here it is for good measure anyway.

install
-------

```bash
npm install callback-collector
```

example
-------

```js
var request = require('request');
var cbc = require('callback-collector');

var c = cbc(function () {
	console.log('0. all callbacks have been called');
});

setTimeout(c(function () {
	console.log('1. setTimeout is done');
}), 1000);

request('https://www.google.com', c(function (err, res, data) {
	console.log('2. https request is finished');
}));
```
output:

```bash
2. https request is finished
1. setTimeout is done
0. all callbacks have been called
```

license
-------

MIT
