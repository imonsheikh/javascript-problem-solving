/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let age = 60;
let isStudent;
let farePrice = 800;
let fareDiscounted;
let studentDiscount = farePrice * .50;
let citizenDiscount = farePrice * .15;

if(age < 10){
    console.log('hey kid you are free')
}else if(isStudent==true){
    console.log('you get 50% discount for student', studentDiscount)
}else if(age >= 60){
    console.log('you are senior citizen got 15% discount', citizenDiscount);
}else{
    console.log('you have to pay full', farePrice)
}