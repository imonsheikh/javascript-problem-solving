// Count how many times a string has the letter a or A

// method 1
// function countLetter(string) {
//     string = string.toLowerCase()
    
//     let count = 0;
//     for(let i=0; i<string.length; i++){
//         if(string[i] === 'a'){
//             count++;
//         }
//     }

//     return count
// }

// let testString = "This is an example Str a and A or AA aa"

// console.log(countLetter(testString));



// practice 
// function countLetter(string){
//    string =  string.toLowerCase()

//    let count = 0;
//    for(let i=0; i<string.length; i++){
//     if(string[i] === "a"){
//         count++
//     }
//    }

//    return count
// }


// const testString = "This is an example Str a and A or AA aa"

// const result = countLetter(testString)
 
// console.log(result);


// // method2
// function countLetter(string){
//     let count = 0;
//     for (let i=0; i<string.length; i++){
//         if(string[i] === 'a' || string[i] === 'A'){
//             count++
//         }
//     }
//     return count;
// }

// let testString = 'the brown fox and rahim call the police A Apple And';
// // countLetter(testString)
// const result = countLetter(testString)
// console.log(result);



// without function

// the string  
const string = "Javascript has Amazing features And Also So on"

// Initialize a total 
let total = 0

// for loop 
for(let i=0; i<string.length; i++){

    if(string[i] === 'a' || string[i] === 'A'){
        total++
    }
}


console.log("The letter 'a' is", total, "times")
console.log(`The letter of "a" is ${total} times `)

