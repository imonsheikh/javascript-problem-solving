/**
 * Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */


function smallestName(names){
    
    let smallest = names[0]
    for(const num of names){
        //  console.log(num.length);
        if(num.length < smallest.length){
            smallest = num
        }
         
    }

    return smallest
}



const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'me'];

console.log(smallestName(heights2));
