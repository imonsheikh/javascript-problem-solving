/**
 * You have an array of objects :
 * const instructor = [
    {name: "Nodi", age: 28, position: "Senior"}
    {name: "Akhi", age: 26, position: "Junior"}
    {name: "Shobuj", age: 30, position: "Senior"}
]
    Your task is to display the instructor names that has the position senior using filter
    MOdify
 */

const instructor = [
    {name: "Nodi", age: 28, position: "Senior"},
    {name: "Akhi", age: 26, position: "Junior"},
    {name: "Shobuj", age: 30, position: "Senior"}
]

const seniors = instructor.filter(single => single.position === "Senior").map(single => single.name)
console.log(seniors);



// alternative 
const instructors = [
    {name: "Nodi", age: 28, position: "Senior"},
    {name: "Akhi", age: 26, position: "Junior"},
    {name: "Shobuj", age: 30, position: "Senior"}
];

// Using forEach after filtering
const seniorInstructors = instructors.filter(instructor => instructor.position === "Senior");

seniorInstructors.forEach(instructor => {
    console.log(instructor.name);
    console.log(typeof instructor.name);
});
