/**
 * Write an arrow function where it will do the following: 
 * a) It will take two array inputs
 * b) Combine the two array assign them in a new array
 * c) Find the maximum number from the new array and return the result
 * 
 */

// Method 1
const doubleArray = (arr1, arr2) => {
const combineArray =  [...arr1, ...arr2]


const maxNum = Math.max(...combineArray)
return maxNum

}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];

console.log(doubleArray(array1, array2));  // Output: 8

// Method 2
const findMaxFromCombinedArrays = (array1, array2) => {
    const combinedArray = array1.concat(array2)

    let maxNumber = combinedArray[0]

    combinedArray.forEach(num => {
        if(num > maxNumber){
            maxNumber = num
        }
    })

    return maxNumber
}

const arrayTest1 = [1, 3, 5, 7];
const arrayTest2 = [2, 4, 6, 8];

console.log(findMaxFromCombinedArrays(arrayTest1, arrayTest2));  // Output: 8