'use strict';

// using let

try {
    console.log(c);
} catch (e) {
    console.log(e);
}

if (true) {
    let c = 'we have c';
    console.log(c);
}

try {
    console.log(c);
} catch (e) {
    console.log(e);
}

/// using var

console.log(d);

if(true) {
    var d = 'we have d';
    console.log(d);
}

console.log(d);