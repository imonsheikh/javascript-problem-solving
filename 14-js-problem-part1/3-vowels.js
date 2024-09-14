/**
 * Write a function to count the number of vowels in a string.


 */
// method 1
function countVowls(string){
    
    let vowels = ['a',  'e', 'i', 'o', 'u']
    let count = 0;
  
    // right 
    for(const num of string){
        if(vowels.includes(num)){
            count++
        }
    }
     
    // wrong 
    // for(const num of string){
    //     if(num.includes(vowels)){
    //         count++
    //     }
    // }

    return count
} 

console.log(countVowls('hello programmer'));
