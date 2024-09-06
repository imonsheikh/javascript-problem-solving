/**
 * 1. Declare an array
a. Declare an array with 5 elements containing fruits
b. console log the 3rd index element
c. change the value of the 2nd index element to jambura
d. console log the final array

 */


const fruits = ['banana', 'mango', 'apple', 'orange', 'papaya']


console.log('1. Full array: ', fruits);
console.log(fruits[3]);//orange


fruits[2] = "Jambura" // basic direct
const directChange = fruits[2]
console.log('2. directChange: ', directChange);
console.log('3. after change: ',fruits)


fruits.splice(3, 1, "splice orange") // use splice
console.log('4. final: ', fruits)


// fruits.fill('fill-apple', 3, 4); // fill method





