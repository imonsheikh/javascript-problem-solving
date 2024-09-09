// Count the number of properties.


let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

// const numberOfProperties = Object.values(student).length
const numberOfProperties = Object.keys(student).length
console.log(numberOfProperties);