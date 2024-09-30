/**
 * Write a arrow function where it will do the following: 
 * a) It will take an array where the array elements will be the name of your friends
 * b) Check if the length of each element is even, push elements with even length to a new array and return the result.
 */

//for of 
const evenPush = (arr) => {
    const newArr = []

    for(const word of arr){
       if( word.length % 2 === 0){
        newArr.push(word)
       }
    }

    return newArr
}
    
    
const result = ['sumon', 'kadir', "abdullah", 'Jubayer', 'rima', 'rupa']    

console.log(evenPush(result));

//Alternative => forEach
const evenLengthNames = friends => {
    let evenNames = []
    friends.forEach(name => {
        if(name.length % 2 === 0){
            evenNames.push(name)
        }
    })

    return evenNames
}

const friends = ['John', 'Emily', 'Sarah', 'Robert', 'Sam'];
console.log(evenLengthNames(friends)); // Output: [ 'John', 'Robert' ]

