/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

// for loop
for (let num = 1; num <= 200; num++) {
  console.log(num);
  if (num === 100) {
    console.log("ostad 100 te ashchi break maren");
    break;
  }
}

console.log("======1");

// while loop
let number = 1;
while (number <= 200) {
  console.log(number);

  if (number === 100) {
    // number++
    console.log("ostal 100 te ashchi break maren");
    break;
  }

  number++;
}


console.log("========2");


// do while loop 
let n = 1;
do{
    console.log(n);

if(n === 100){
    console.log('100 founded');
    break;
}
    n++
}
while(n<=200)