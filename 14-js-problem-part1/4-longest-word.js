/**
 * Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

// Method 1
function findLongestWord(string){
    const words = string.split(' ')
    // console.log(words);
    // console.log(words.length);//8
    
    

    let longestWord = '';
    for(let i = 0; i<words.length; i++){
        if(words[i].length > longestWord.length){
            // console.log(words[i]);
            // console.log(words[i].length);//1 2 8 11
            longestWord = words[i]
            // console.log(longestWord);
            

        }
            
    }
    return longestWord
}


const inputStr = "I am learning Programming to become a programer"

console.log("output:", findLongestWord(inputStr));
