
/**
 * Examples:
 * 3 and 3
 * '3' and 3
 * false and 0
 * null and 0
 * undefined and null
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
 */

var a = 3;
var b = '3';

if (a == b) {
    console.log('They are equal! (equality)');
} else {
    console.log('Not equal. (equality)');
}

if (a === b) {
    console.log('They are equal! (strict-equality)');
} else {
    console.log('Not equal. (strict-equality)');
}