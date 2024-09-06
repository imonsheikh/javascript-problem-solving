// Using function to calculate BMI
function calculateBMI(height, weight) {
    
    
    // formula for only meters : BMI = weight (kg) / (height (m) * height (m))
  let bmiFormula = weight  / (height * height);

  // declare  variable to store BMI condition
  let condition;

  // if else condition
  if (bmiFormula < 18) {
    condition = "underWeight";
  } else if (bmiFormula < 25 && bmiFormula >= 18) {
    condition = "you are Normal Weight";
  } else if (bmiFormula > 25 && bmiFormula < 30) {
    condition = "over weight";
  } else {
    condition = "obesity";
  }

  // Final Output
  console.log(
    `Your BMI is ${bmiFormula.toFixed(2)}, and your condition is "${condition}"`
  );
}

// Example
let height = 1.75; //Height in meters
let weight = 100; //weight in KG

calculateBMI(height, weight)



 

