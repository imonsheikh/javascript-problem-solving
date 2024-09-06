/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

// while loop 
let num = 206;
let sum = 0;

while(num <= 311){
    if(num % 2 === 0){
        sum+= num;
    }
    num++
}

console.log("while loop", sum);



// for loop 
let sum2 = 0;
for (let number = 206; number <= 311; number++) {
    if (number % 2 === 0) {
        sum2 += number; // Add the even number to the sum
    }
}

console.log("Sum of even numbers from 206 to 311:", sum2);

// do while loop 
let sum3 = 0;
let n = 206;

do{
    if(n % 2 === 0){
        sum3+=n;

    }
    n++;
}

while(n<=311)

console.log("do while loop", sum3);