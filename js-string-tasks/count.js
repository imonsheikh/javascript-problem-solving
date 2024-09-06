// Count how many times a string has the letter a
function countLetter(string){
    let count = 0;
    for (let i=0; i<string.length; i++){
        if(string[i] === 'a' || string[i] === 'A'){
            count++
        }
    }
    return count;
}

let testString = 'the brown fox and rahim call the police A Apple And';
// countLetter(testString)
console.log(countLetter(testString));