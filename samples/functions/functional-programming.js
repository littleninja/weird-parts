function mapEach(arr, fxn) {
    var out = [];
    for (var a of arr) {
        out.push(fxn(a));
    }
    return out;
}

function double(a) {
    return a * 2;
}

function greaterThan(limiter) {
    return function(l, a) {
        return a > l;
    }.bind(this, limiter);
}

console.log(mapEach([1, 2, 3], double));
console.log(mapEach([1, 2, 3], function (a) {
    return a > 1;
}));

console.log(mapEach([2, 3, 4], greaterThan(2)));
console.log(mapEach([2, 3, 4], greaterThan(3)));