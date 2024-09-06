/**
 * Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
 */

var math = 80;
var biology = 70;
var chemistry = 75.56;
var physics = 69.54;
var bangla = 65;


var totalMarks = math + biology + chemistry + physics + bangla;

var average = totalMarks/5;

console.log(average.toFixed(2));//72.02

