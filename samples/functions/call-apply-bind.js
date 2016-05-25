
var jane = {
    firstName: 'Jane',
    lastName: 'Doe',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

var grace = {
    firstName: 'Grace',
    lastName: 'Hopper',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

function logName(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Languages: ' + lang1 + ', ' +  lang2);
    console.log('---------------------------');
}

var logJane = logName.bind(jane);

logJane();
logJane('en');
logJane('en', 'es');

logName.call(grace, 'en', 'de');
logName.apply(grace, ['en', 'de']);

// ----------------------------------------------------------

function multiply(a, b) {
    return a * b;
}

// function currying: binding a value to a function parameter
var multiplyBy42 = multiply.bind(this, 42);

console.log(multiply(1, 2));
console.log(multiplyBy42(1));