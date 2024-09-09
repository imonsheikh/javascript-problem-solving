// Capitalize Every first Letter of each word in a String

function capitalizeFirstLetter(str) {
    // split the string by spaces into an array of words 
    let words = str.split(' ');
    let newWords = [];
    //  console.log(words.length);
     

    // loop through each word in the array 
    for(let i=0; i<words.length; i++){
        // check if the word is not empty string 
            // capatalize the first letter using brakcet notation 
        
            let wordName = words[i][0].toUpperCase() + words[i].slice(1);
            console.log(wordName);
            

            newWords.push(wordName);
            console.log(newWords);
            
        
    }

    return newWords.join(' ');
    

}

let myString = "this is a sample string to capitalize";

console.log("Original string:", myString);
console.log("Modified string:", capitalizeFirstLetter(myString));



// without Function 
