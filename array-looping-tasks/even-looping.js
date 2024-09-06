// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = []

for(const number of numbers){
     if(number % 2 === 0){
        evenNumbers.push(number);
     }

}
console.log(evenNumbers);


const numbers2 = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers2 = []

for(let n=0; n<numbers2.length; n++ ){
    if(numbers2[n] % 2 !==1){
        evenNumbers2.push(numbers2[n])
    }
}
console.log(evenNumbers2);
