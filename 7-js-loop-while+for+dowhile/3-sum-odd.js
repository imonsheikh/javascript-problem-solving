/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
// while loop 

let num = 81;
let sum = 0;
while(num<=131){
    if(num % 2 === 1){
        sum+= num;
    }

    num++;
}
// console.log("sum of the odd numbers use while loop", sum);



// for loop 

let sum2 = 0;
for(let i=81; i<=131; i++){
    if(i % 2 === 1){
        sum2+=i;
    }
    console.log('sum for loop', sum2); // প্রতিটি একটা একাট করে দেখাবে
}

  console.log('sum for loop', sum2); // একবারে যোগ করে দেখাবে

// do while loop 
 let number = 81;
 let sum3 = 0;

 do{
    if(number % 2 !==0){
        sum3=sum3 + number;
    }
    number = number + 1;
 }
 while(number<=131)

 console.log('sum use do while loop', sum3);


