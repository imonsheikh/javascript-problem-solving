// Count the number of properties.


let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

// const numberOfProperties = Object.values(student)
const numberOfProperties = Object.keys(student)
console.log(numberOfProperties);