// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const reverseColors = [];

for(const color of colors){
    reverseColors.unshift(color);
}

console.log(reverseColors);


// alternative 
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const reversedColors = [];

// // Iterate over the original array in reverse order
// for (let i = colors.length - 1; i >= 0; i--) {
//     // Add each element to the reversed array
//     reversedColors.push(colors[i]);
// }

// console.log(reversedColors);

