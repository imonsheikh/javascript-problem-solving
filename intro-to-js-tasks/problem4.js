/**
 * Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.
 */


var a = isNaN('&');
var b = isNaN(11);
var c = isNaN('11');

var d = isNaN(2-10);

console.log(a); //true
console.log(b); //false
console.log(c); //false
console.log(d); //false


/**
 * Explanation: 
 * The isNaN() function in JavaScript checks whether a value is NaN (Not-a-Number). It returns true if the value is NaN and false otherwise.

Let's analyze each variable:

var a = isNaN('&');

The '&' is a string and not a number.
isNaN('&') will return true because '&' is not a number.
Result: a will be true.

var b = isNaN(11);

The value 11 is a number.
isNaN(11) will return false because 11 is a valid number.
Result: b will be false.

var c = isNaN('11');

The value '11' is a string, but it represents a valid number.
JavaScript can convert the string '11' to the number 11.
isNaN('11') will return false because the string '11' can be converted to a valid number.
Result: c will be false.

var d = isNaN(2-10);

The expression 2 - 10 evaluates to -8.
-8 is a valid number.
isNaN(-8) will return false because -8 is a valid number.
Result: d will be false.

Summary of Results:
a = true
b = false
c = false
d = false
Explanation:
isNaN() checks whether the provided value is "Not-a-Number." If the value is not a valid number, it returns true; otherwise, it returns false. In the given code, only '&' is not a number, so a is true, while the others (11, '11', -8) are valid numbers or can be converted to numbers, so b, c, and d are all false.
 */