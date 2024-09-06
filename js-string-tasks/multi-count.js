// Count how many times a string has the letter a or A

function countLetter(string) {
    string = string.toLowerCase()
    
    let count = 0;
    for(let i=0; i<string.length; i++){
        if(string[i] === 'a'){
            count++;
        }
    }

    return count
}

let testString = "This is an example Str a and A or AA aa"

console.log(countLetter(testString));

