// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


// method 01
// function make_avg(array, size){
// if(size === 0){
//     return 0; //Return 0 if the size of the array is 0 to avoid division by zero
// }


// let sum = 0;
// for(let i=0; i<size; i++){
//     sum += array[i]
// }

// return sum / size
// }

// const numbers = [5, 10, 15, 20]
// const average = make_avg(numbers, numbers.length);

// console.log(average);


// method 2 
function make_avg2(array2,size2){
    // console.log(size2);
    
if(size2 === 0){
    return 0//Return 0 if the size2 of the array is 0 to avoid division by zero if I do not use this this function will return NaN
}

let sum = 0;
for(const num of array2){
    // console.log(num);

    sum = sum + num;

    
}

return sum / size2

}

const arrNumber = []
const arrSize = arrNumber.length
const average2 = make_avg2(arrNumber, arrSize)

console.log(average2);//
