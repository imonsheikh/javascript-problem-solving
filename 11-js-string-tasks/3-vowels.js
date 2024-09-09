// Check whether a string contains all the vowels a, e, i, o, u

function vowelsContains(str) {
  const array = str.split('');

  if (
    array.includes("a") &&
    array.includes("e") &&
    array.includes("i") &&
    array.includes("o") &&
    array.includes("u")
  ){
    return true
  }else{
    return false
  }
    // console.log(array);    
}

const result = vowelsContains("helloaeiou");
console.log(result);


// practice 
// function allVowellsSearch(string){
// const array = string.split('')

// if(
//   array.includes('a') &&
//   array.includes('e') &&
//   array.includes('i') &&
//   array.includes('o') &&
//   array.includes('u')
// ){
//   return true
// }else{
//   return false
// }
// }

// const results = allVowellsSearch('helloaeiou')
// console.log(results);


// 2nd method 
function containsAllVowels(str2){
  // convert string to lowercase to handle cases of both lowercase 
  str2 = str2.toLowerCase()

  // check if all vowels are present in the string 
  return(str2.includes('a') &&
         str2.includes('e') &&  
         str2.includes('i') &&
         str2.includes('o') &&  
         str2.includes('u')
         
  );
}

const testString = "This is a test string u  containing all vowels";
console.log(containsAllVowels(testString)); 



// method-3 
//The string check 
Const string3 = "Education is the key to success"

// Intialize variables 
let hasA = false
let hasE = false
let hasI = false
let hasO = false
let hasU = false

// convert string to toLowerCase  to handle both uppercase and lowercase vowels 
const lowerCaseString = string3.toLowerCase()

// for loop through each character in the string 
for(let i=0; i<toLowerCase.length; i++){

  const char = lowerCaseString[i]

  // check if the charecter is a vowel and set the corresponding flag
   if(char === 'a'){
    hasA = true
   }else if(char === 'e'){
    hasB = true
   }else if(char === 'i'){
    hasI = true
   }else if(char === 'o'){
    hasO = true
   }else if(char === 'u'){
    hasU = true
   }


  //  if all the vowels are foud break the loop 
  if(hasA && hasE && hasI && hasO && hasU){
    break
  }
}

// check if all vowels are present 
if(hasA && hasE && hasI && hasO && hasU){
  console.log('The string contains all the vowels: aeiou');
  
}
else{
  console.log('the string does not contain all vowels');
  
}
