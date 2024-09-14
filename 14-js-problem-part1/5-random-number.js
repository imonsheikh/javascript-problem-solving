/**
 * Generate a random number between 10 to 20.
 */
const randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
console.log(randomNumber);

// method 2 
const randomNum = Math.ceil(Math.random() * (20 - 10)) + 9;
console.log(randomNum);

// method 3
const randomNum2 = Math.floor(Math.random() * 11) + 10;
console.log(randomNum2);

