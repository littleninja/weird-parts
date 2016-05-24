function b() {
    var myVar = 'b';
    console.log(myVar);
}

function a() {
    var myVar = 'a';
    b();
    console.log(myVar);
}

var myVar = 'global';
console.log(myVar);
a();
console.log(myVar);