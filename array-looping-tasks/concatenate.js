// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

var concatenateString = '';

for(const number of numbers){
    concatenateString = concatenateString + number;
}
console.log(concatenateString);


// method 2 
var numbers2 = ['Tom', 'Tim', 'Tin', 'Tik']
var concatenateString2 = numbers.join('');
console.log(concatenateString2);


// method 3 
