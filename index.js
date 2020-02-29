// Node Moudle

function mouse(color){
    this.color = color;
    this.dead = false;
}

mouse.prototype.die = function(){
    this.dead = true;
} 

function cat(){
    this.stomach = [];
}

cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
    mouse.die();
}

var mickey = new mouse('black');
var jerry = new mouse('yellow');
var Tom = new cat();
Tom.eat(mickey);
Tom.eat(jerry);
console.log(Tom);
console.log(mickey);
console.log(jerry)