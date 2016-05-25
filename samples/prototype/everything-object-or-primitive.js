var a = 'foo';
var b = 123;
var c = true;
var d = {
    letter: 'd'
};
var e = [1, 2, 3];
var f = function (a) {
    return a * 3;
};

console.log('a.__proto__ (string)', a.__proto__);
console.log('b.__proto__ (number)', b.__proto__);
console.log('c.__proto__ (boolean)', c.__proto__);
console.log('d.__proto__ (object literal)', d.__proto__);
console.log('e.__proto__ (array literal)', e.__proto__);
console.log('f.__proto__ (function)', f.__proto__);
console.log('e.__proto__.__proto__ (array literal)', e.__proto__.__proto__);
console.log('f.__proto__.__proto__ (function)', f.__proto__.__proto__);

console.log('a typeof', typeof a);
console.log('b typeof', typeof b);
console.log('c typeof', typeof c);
console.log('d typeof', typeof d);
console.log('e typeof', typeof e);
console.log('f typeof', typeof f);
console.log('null typeof', typeof null);
console.log('undefined typeof', typeof undefined);
console.log('d Object.prototype.toString()', Object.prototype.toString(d));
console.log('e Object.prototype.toString()', Object.prototype.toString(e));
console.log('f Object.prototype.toString()', Object.prototype.toString(f));

// useful for constructor functions (no example here)
console.log('f instanceof Function', f instanceof Function);
console.log('f instanceof Object', f instanceof Object);