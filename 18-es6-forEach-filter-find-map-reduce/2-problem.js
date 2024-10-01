/**
 * You are given an array say: [33, 50, 79, 78, 90, 101, 30]. Now return/get all the elements which are divisible by 10 using array.filter() method 
 * Now do the same task of question 2. But do this using array.find() method. Then compare the output of question2 and question 3
 */

// filter method 1
const numbers =  [33, 50, 79, 78, 90, 101, 30]
const output = numbers.filter(num => num % 10 === 0)

console.log(output);//[ 50, 90, 30 ]
console.log(typeof output);//object


// filter method 2 
let array = [33, 50, 79, 78, 90, 101, 30];

let divisibleByTen = array.filter(function(number){
    return number % 10 === 0;
})
console.log(divisibleByTen);//[ 50, 90, 30 ]





// find method 1 
const numbers2 =  [33, 50, 79, 78, 90, 101, 30]
const output2 = numbers2.find(num2 => num2 % 2 === 0)

console.log(output2);//50
console.log(typeof output2);//number


// find method 2
let array2 = [33, 50, 79, 78, 90, 101, 30];

let firstDivisibleByTen = array2.find(function(number2) {
    return number2 % 10 === 0;
});

console.log(firstDivisibleByTen);  // Output: 50


