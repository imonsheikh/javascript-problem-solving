// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


// method 01
function make_avg(array, size){
if(size === 0){
    return 0; //Return 0 if the size of the array is 0 to avoid division by zero
}

let sum = 0;
for(let i=0; i<size; i++){
    sum += array[i]
}

return sum / size
}

const numbers = [5, 10, 15, 20]
const average = make_avg(numbers, numbers.length);

console.log(average);
