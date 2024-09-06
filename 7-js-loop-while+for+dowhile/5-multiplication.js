/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

// for loop 
let number = 5;
for(let multiplier = 1; multiplier <= 10; multiplier++){
    let result = number * multiplier;
    console.log(`${number} * ${multiplier} = ${result}`);
}


// while loop 
let num = 10;
let multi = 1;
while(multi<=10){
let result = num * multi;

  console.log(`${num} * ${multi} = ${result}`);

    multi++;
}

// do while loop 

let n = 8;
let mul = 1;
do{
let result2 = n * mul;
console.log(n,"*", mul, "=", result2);
mul++

}
while(mul<=10)