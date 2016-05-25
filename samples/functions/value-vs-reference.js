// primitive types: by value
var a = 10;
var b = a;

a = 20;

console.log(a); // 20
console.log(b); // 10

// objects (including functions): by reference
var c = { foo: true, bar: false };
var d = c;

c.foo = false;

console.log(c); // { foo: false, bar: false }
console.log(d); // { foo: false, bar: false }