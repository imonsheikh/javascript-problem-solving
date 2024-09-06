// // /*If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// // Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string */


// // // method 01 
function replaceX(test) {
  let str = "";

  for (let i = 0; i < test.length; i++) {
    if (test[i] === "x") {
    //   str += "y";
    test[i] = 'y';
    } else if (test[i] === "X") {
      str = str + "Y";
    } else {
      str += test[i];
    }
  }
  return str;
}

const result = replaceX("hello this is testing x and X ");

console.log(result);

// // // alternative 
// // function replaceXwithY(strr){
// //     // check if the string contains 'x' or 'y'
// //     if(strr.includes('x') || strr.includes('X')) {

// //         // split the string into an array of charecters 
// //         let chars = strr.split('');

// //         // loop through the array and replace 'x' with 'y' and 'X' with 'Y'
// //         for(let i=0; i<chars.length; i++){
// //             if(chars[i] === 'x'){
// //                 chars[i] = 'y'
// //             }
// //             else if(chars[i] === 'X'){
// //                  chars[i] = 'Y';
// //             }

// //         }
// //         strr = chars.join('')
// //     }

// // return strr
// // }

// // let myString = "This is a Sample String with an x and  X";
// // console.log("Original string:", myString);
// // console.log("Modified string:", replaceXwithY(myString));



// // alternative 3 
// function replaceXwithY(str) {
//     // Check if the string contains 'x' or 'X'
//     if (str.includes('x') || str.includes('X')) {
//         // Replace 'x' with 'y' and 'X' with 'Y'
//         str = str.replace(/x/g, 'y').replace(/X/g, 'Y');
//     }
//     return str;
// }

// // Example usage:
// let myString = "This is a Sample String with an x X";
// console.log("Original string:", myString);
// console.log("Modified string:", replaceXwithY(myString));

