/**
 * js-problems-part2-practice-tasks
Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

function lowestNumber(numbers){

    let lowest = numbers[0]
    for(const num of numbers){
        if(num < lowest){
            lowest = num
        }
    }
  return lowest
    
}

const heights2 = [167, 190, 120, 165, 137];

console.log(lowestNumber(heights2));


