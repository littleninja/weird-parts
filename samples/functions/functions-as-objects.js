
// function statement
// babble = object (statement)
// { console.log(this.words); } = object.code
// babble() = expression
function babble() {
    console.log(this.words);
}

babble.words = 'blah blah blah';

console.log(babble());

// anonymous function
// we don't need a name because it's assigned to a variable,
// the variable stores the reference in memory
var speak = function () {
    console.log('say words');
};

// note: function and variable context still apply
// cannot invoke variable reference to function until it's defined