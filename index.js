// Node Moudle
var mouse = require('./mouse');
var cat = require('./cat');

var mickey = new mouse('black');
var jerry = new mouse('yellow');
var Tom = new cat();
Tom.eat(mickey);
Tom.eat(jerry);
console.log(Tom);
console.log(mickey);
console.log(jerry)