/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

// while loop 
let number = 61;
while(number < 100){
    if(number % 2 === 1){
        console.log(number)
    }
    number += 1;
    // console.log(number);
}


// for loop 
for(let i = 61; i<100; i++){
    //check the number is odd or not
    if(i % 2 === 1){
        console.log(i); //print the odd number
    }
}


// do while loop 
let num = 61;
do{
    if(num % 2 !== 0){
        console.log(num);
    }
    num++
}
while(num < 100)




/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

// while loop
let num = 78;
while(num<=98){
    if(num % 2 === 0){
        console.log(num); //print the even number
    }
    num++;//increment number for next iteration
}

// for loop 
for(let n=78; n<=98; n++){
    if(n % 2 === 0){
        console.log(n);
    }
}

// do while loop 
let number = 78;
do{
    if(number % 2 === 0){
        console.log(number);
    }
    number+=1;
}
while(number<=98)