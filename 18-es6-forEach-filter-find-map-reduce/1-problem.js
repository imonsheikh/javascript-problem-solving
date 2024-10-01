/**
 * You have an odd array(array with odd numbers). [1, 3, 5, 7, 9].
 * Now convert this array into an even array (array with even numbers). [2, 4, 6, 8. 10]. Do this using for loop and array.map() method. Hints: add one of any odd number and it will become an even number
 */


//using map() method1
const numbers = [1, 3, 5, 7, 9]

const result = numbers.map(num => num + 1)
console.log(result);//[ 2, 4, 6, 8, 10 ]

//using map() method2
let oddArray = [1, 3, 5, 7, 9];

let evenArray2 = oddArray.map(function(num) {
    return num + 1;
});
console.log(evenArray2);  // Output: [2, 4, 6, 8, 10]


//using for loop method1 
const numbers2 = [1, 3, 5, 7, 9]

const evenArray = []
for(const number of numbers2){
    
    const even = number + 1
    evenArray.push(even)
}
console.log(evenArray);


//using for loop method2
let oddArray2 = [1, 3, 5, 7, 9];
let evenArray3 = [];

for (let i = 0; i < oddArray2.length; i++) {
    evenArray3.push(oddArray2[i] + 1);
}

console.log(evenArray3);  // Output: [2, 4, 6, 8, 10]




