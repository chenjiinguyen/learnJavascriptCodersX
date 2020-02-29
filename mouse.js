function mouse(color){
    this.color = color;
    this.dead = false;
};

mouse.prototype.die = function(){
    this.dead = true;
};

module.exports = mouse;