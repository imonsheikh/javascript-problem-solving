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


