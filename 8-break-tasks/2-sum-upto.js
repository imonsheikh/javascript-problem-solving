// /* 
// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
// */

// for loop from chat gpt
let sum = 0; 
for(let num = 1; num<=100; num++){
    sum +=num;
    // console.log(num);
    if(sum >= 100){
        break;
    }
}

console.log('for loop sum', sum);


// //from my research
let sum = 0; 
for(let num = 1; ; num++){
    sum +=num;
    console.log(`${num} and ${sum}`);
    if(sum >= 100){
        break;
    }
}

console.log('for loop sum', sum);



// console.log("========1");


// // while loop 
let sum2 = 0;
let number =1;
while(true){
    sum2+=number;
    if(number >=100){
        break;
    }
    number++
}

console.log('while loop', sum2);

// console.log("=====2");



// // do while loop 
let number2 = 1;
let sum3 = 0;

do{
sum3 += number2;
if(sum3 === 100){
    break;
}
number2++;


}while(true)

console.log(`${number2} do while loop ${sum3}`);
console.log("do while loop", sum3);



let total = 0;

let number = 0;
while(total <=100){
    // total += number;
    total= total + number;

    if(total >= 100){
        break;
    }
console.log(total);
    number++;
}

