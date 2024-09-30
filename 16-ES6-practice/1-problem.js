/**
 * 1. Write a arrow function that will take 3 parameters, will multiply the parameters and will return the result
 * 2. Write the following sentence in Three lines and print the result.
 *   I am web developer. I love to code. I love to eat biryani
 * 3. Write an arrow function that will take 2 parameters: One parameter will come from you and other parameter will come will be default parameter. Add these two parameters and return the result.
 */

//111111
const multiply = (num1, num2, num3) => num1 * num2 * num3
console.log(multiply(2, 3, 4));  //  24


//222
const sentence = `I am web developer
I love to code 
I love to eat biriyani 
`
console.log(sentence);

// 3333
 const add = (me, other = 2) => me + other

 console.log(add(5)); // 7
 console.log(add(5, 10)); // 15


