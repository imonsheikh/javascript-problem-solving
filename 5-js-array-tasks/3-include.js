/**
 * ### 3. Checking Array Membership with ‘includes’

**Instructions:**

1. Create an array of books containing different book.

2. Use the includes method to check if the array contains a javascript book.

3. Print a message to the console indicating whether the element is present in the array or not.
 */



// Create an array of books containing different books
let books = ["The Great Gatsby", "To Kill a Mockingbird", "Pride and Prejudice", "JavaScript: The Good Parts", "The Catcher in the Rye"];

// Use the includes method to check if the array contains a JavaScript book
let includesJavaScript = books.includes("JavaScript: The Good Parts");


// Print a message to the console indicating whether the element is present in the array or not
if (includesJavaScript === true) {
    console.log("The array contains a JavaScript book.");
} else {
    console.log("The array does not contain a JavaScript book.");
}
