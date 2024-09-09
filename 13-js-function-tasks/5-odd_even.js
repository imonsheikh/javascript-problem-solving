/**
 * Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

function odd_even(intNums){

     

    if(intNums % 2  === 1){
        return 'odd'
        
    }else{
        return 'even'
    }
}

const result = 21 
console.log(odd_even(result));
