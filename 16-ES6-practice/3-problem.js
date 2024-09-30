/**
 * Write an arrow function where it will do the following : x^2
 * a) Square each array element
 * b) Calculate the sum of the squared elements
 * c) Return the average of the sum of the squared elements
 * Print the result
 * 
 * 
 */

const averageSum = (arr) => {
let sum  = 0 
arr.forEach(element => {
    // console.log(element);
// const square = element ^ 2
const square = element ** 2
sum += square
    
})

const SumAverageSquare =  sum / arr.length
return SumAverageSquare
}


const result = [2, 25, 41, 10, 22, 9, 8, 65, 20]
// const result = [2, 3, 4, 5]
console.log(averageSum(result));


// alternative2 
const averageOfSquares = (arr2) => {
    const sumOfSquares = arr2.reduce((sum, num) => sum + (num ** 2), 0)
    return sumOfSquares / arr2.length
} 

const numbers = [2, 3, 4, 5];
console.log(averageOfSquares(numbers));  // Output: 13.5

//Alternative 3
const averageOfSquares = (arr) => {
    // Step 1: Square each element
    const squares = arr.map(num => num ** 2);

    // Step 2: Sum of the squared elements
    const sumOfSquares = squares.reduce((sum, num) => sum + num, 0);

    // Step 3: Return the average of the squared sum
    return sumOfSquares / arr.length;
};

const numbers = [2, 3, 4, 5];
console.log(averageOfSquares(numbers));  // Output: 13.5


