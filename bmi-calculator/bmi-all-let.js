// Function to convert height to meters
function convertHeightToMeters(height, unit) {
    let heightInMeters;
    
    if (unit === 'inches') {
      // 1 inch = 0.0254 meters
      heightInMeters = height * 0.0254;
    } else if (unit === 'cm') {
      // 1 cm = 0.01 meters
      heightInMeters = height * 0.01;
    } else if (unit === 'meters') {
      // If the height is already in meters, return as is
      heightInMeters = height;
    } else {
      console.log('Invalid height unit. Please use "inches", "cm", or "meters".');
      return null;
    }
  
    return heightInMeters;
  }
  
  // Function to calculate BMI and determine the BMI category
  function calculateBMI(weight, height, heightUnit) {
    // Convert height to meters
    let heightInMeters = convertHeightToMeters(height, heightUnit);
    if (heightInMeters === null) {
      return; // Exit if invalid height unit
    }
  
    // Calculate BMI using the formula: BMI = weight (kg) / (height (m) * height (m))
    let bmi = weight / (heightInMeters * heightInMeters);
  
    // Determine the BMI category using if-else conditions
    let category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
  
    // Print the results
    console.log('Height in meters:', heightInMeters.toFixed(2));
    console.log('Weight in kg:', weight);
    console.log('BMI:', bmi.toFixed(2));
    console.log('Category:', category);
  }
  
  // Example usage
  console.log('--- Example BMI Calculation ---');
  calculateBMI(70, 175, 'cm'); // Replace with desired weight (kg), height, and unit ('inches', 'cm', 'meters')
  calculateBMI(150, 70, 'inches');
  calculateBMI(80, 1.8, 'meters');
  