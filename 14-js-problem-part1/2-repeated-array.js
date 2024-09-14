/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */

// method 1
function countRepeatedArr(target, numbers){
  
  let count = 0;
  for(const num of numbers){
    if(num === target){
      count++
    }
  }

  return count
}

const numbers = [5, 6, 11, 12, 98, 5,];
let target = 5;
// let target = 25;
console.log(countRepeatedArr(target, numbers));
