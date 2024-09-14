/**
 * Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */


const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// Find the friend with the smallest name
const smallestName = heights2.reduce((smallest, current) => 
  current.length < smallest.length ? current : smallest
);

console.log(smallestName); // Output: "ron"
