// Function to convert height to meters
function convertHeightToMeters(height, unit) {
    if (unit === 'inches') {
      // 1 inch = 0.0254 meters
      return height * 0.0254;
    } else if (unit === 'cm') {
      // 1 cm = 0.01 meters
      return height * 0.01;
    } else if (unit === 'meters') {
      // If the height is already in meters, return as is
      return height;
    } else {
      console.log('Invalid height unit. Please use "inches", "cm", or "meters".');
      return null;
    }
  }
  
  // Function to calculate BMI and determine the BMI category
  function calculateBMI(weight, height, heightUnit) {
    // Convert height to meters
    console.log('Converting height to meters...');
    let heightInMeters = convertHeightToMeters(height, heightUnit);
  
    if (heightInMeters === null) {
      return; // Exit if invalid height unit
    }
  
    console.log('Height in meters:', heightInMeters.toFixed(2));
    console.log('Weight in kg:', weight);
  
    // Calculate BMI using the formula: BMI = weight (kg) / (height (m) * height (m))
    let bmi = weight / (heightInMeters * heightInMeters);
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
  calculateBMI(70, 175, 'cm'); // Replace with desired weight (kg), height, and unit ('inches', 'cm', 'meters')
  calculateBMI(150, 70, 'inches');
  calculateBMI(80, 1.8, 'meters');
  