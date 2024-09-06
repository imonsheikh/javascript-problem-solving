/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

// for loop 
for(let num = 55; num<=85; num++){

    if(num % 2 === 0 || num % 5 === 0){
        continue;
    }

    console.log(num);
}

console.log("--------------------1");
// while loop 
let number = 55;
while(number <= 85){
if(number % 2 === 0 || number % 5 === 0){
    number++;
    continue;
}

console.log(number);
    number++;
}


console.log("============2");

// do while loop 
let n = 55;
do{
if(n % 2 === 0 || n % 5 === 0){
    n++;
    continue;
}

    console.log(n);
    n++
}
while(n<=85)