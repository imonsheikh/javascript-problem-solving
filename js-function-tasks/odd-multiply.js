// 


// switch 
function processNumber(number){
    switch(number % 2) {
        case 0:
            return number / 2
        default:
            return number * 2;
    }
}
console.log(processNumber(3)); // Output: 6 (3 * 2)
console.log(processNumber(4)); // Output: 2 (4 / 2)

