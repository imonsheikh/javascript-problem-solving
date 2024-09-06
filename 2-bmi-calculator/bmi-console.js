// Function to calculate BMI and determine the BMI category
function calculateBMI(weight, height) {
    // Calculate BMI using the formula: BMI = weight (kg) / (height (m) * height (m))
    console.log('Calculating BMI...');
    console.log('Weight:', weight, 'kg');
    console.log('Height:', height, 'm');
  
    let bmi = weight / (height * height);
    console.log('BMI:', bmi.toFixed(2));
  
    // Determine the BMI category using if-else conditions
    if (bmi < 18.5) {
      console.log('Category: Underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      console.log('Category: Normal weight');
    } else if (bmi >= 25 && bmi < 29.9) {
      console.log('Category: Overweight');
    } else {
      console.log('Category: Obesity');
    }
  }
  
  // Example usage
  console.log('--- Example BMI Calculation ---');
  calculateBMI(70, 1.75); // Replace with desired weight (kg) and height (m)
  