/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 1; i <= 100; i++) {
    // Check if the number is a perfect square
    if (Number.isInteger(Math.sqrt(i))) {
        console.log("The first square number encountered is:", i);
        break;
    }
}

