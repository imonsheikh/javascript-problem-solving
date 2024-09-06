function calculateGrade(score) {
    let grade;
  
    if (score >= 90 && score <= 100) {
      grade = 'A';
    } else if (score >= 80 && score < 90) {
      grade = 'B';
    } else if (score >= 70 && score < 80) {
      grade = 'C';
    } else if (score >= 60 && score < 70) {
      grade = 'D';
    } else if (score >= 0 && score < 60) {
      grade = 'F';
    } else {
      // If the score is not within the range of 0 to 100
      console.log('Invalid score. Please enter a score between 0 and 100.');
      return;
    }
  
    console.log(`The grade for a score of ${score} is: ${grade}`);
  }
  
  // Example usage
  calculateGrade(95);  // Outputs: The grade for a score of 95 is: A
  calculateGrade(82);  // Outputs: The grade for a score of 82 is: B
  calculateGrade(74);  // Outputs: The grade for a score of 74 is: C
  calculateGrade(65);  // Outputs: The grade for a score of 65 is: D
  calculateGrade(50);  // Outputs: The grade for a score of 50 is: F
  calculateGrade(105); // Outputs: Invalid score. Please enter a score between 0 and 100.
  calculateGrade(-5);  // Outputs: Invalid score. Please enter a score between 0 and 100.
  