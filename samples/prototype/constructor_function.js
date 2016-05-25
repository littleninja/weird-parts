function Animal() {
    console.log('creating new animal');
    this.sound = 'moo';
    this.legs = 4;
}

// why add via prototype? memory!
// add to the function prototype to put it in memory once (still has access
// to instance properties and methods), and instances can access it through
// the prototype chain.
Animal.prototype.makeSound = function () {
    console.log(this.sound + '!');
};

var cow = new Animal();

console.log('cow', cow);
console.log('cow.__proto__', cow.__proto__);
console.log('cow.__proto__.__proto__', cow.__proto__.__proto__);

// be careful: this can override existing prototype methods
Number.prototype.greaterThan = Number.prototype.greaterThan
    || function(value) { return this > value; };

var three = new Number(3);

console.log(three.greaterThan(2));
console.log(three.greaterThan(4));