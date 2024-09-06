/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
// for loop
for (let num = 1; num <= 40; num++) {
  if (num % 2 === 1) {
    // num++
    continue;
  }

  console.log(num);
}

console.log("-----1");



// while loop
let number = 1;

while (number <= 40) {
  if (number % 2 !== 0) {
    number++;
    continue;
  }
  console.log(number);
  number++;
}


// do while loop 
let n = 1;
do{
 if(n % 2 === 1){
    n++;
    continue;
 }

    console.log(n);
    n++;
}
while(n<=50)
