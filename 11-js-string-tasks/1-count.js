// Count how many times a string has the letter a
function countLetter(string){
    let count = 0;
    for (let i=0; i<string.length; i++){
        if(string[i] === 'a'){
            count++
        }
    }
    return count;
}

let testString = 'the brown fox and rahim call the police A Apple And';
// countLetter(testString)
const result = countLetter(testString)
console.log(result);





// without function

// the string  
const string = "Javascript has amazing features"

// Initialize a total 
let total = 0

// for loop 
for(let i=0; i<string.length; i++){

    if(string[i] === 'a'){
        total++
    }
}


console.log("The letter 'a' is", total, "times")
console.log(`The letter of "a" is ${total} times `)