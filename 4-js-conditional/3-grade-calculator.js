/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/


// Method01
const number = 95;

if (number >= 90 && number <= 100) {
  console.log('you have got grade "A"');
} else if (number >= 80 && number <= 89) {
  console.log('you have got grade "B"');
} else if (number >= 70 && number <= 79) {
  console.log(' you have got grade "C"');
} else if (number >= 60 && number <= 69) {
  console.log('you have got grade "D"');
} else if (number >= 0 && number <= 59) {
  console.log('you have got grade "F"');
} else if (number < 0 || number > 100) {
  // use || instead of &&
  console.log("Unknown number");
} else {
  console.log("invalid number");
}

// MEthod 02
var score = -10000;

function calculateGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 0 && score <= 59) {
    return "F";
  } else {
    return "Invalid score by function";
  }
}

console.log(calculateGrade(score));

// Method 03

var num = 10;

function gradeScore(num) {
  let grade;

  switch (true) {
    case num >= 90 && num <= 100:
      grade = "A";
      break;
    case num >= 80 && num <= 90:
      grade = "B";
      break;
    case num >= 70 && num <= 79:
      grade = "C";
      break;
    case num >= 60 && num <= 69:
      grade = "D";
      break;
    case num >= 0 && num <= 59:
      grade = "F";
      break;
    default:
      grade = "Invalid score by switch";
  }
  return grade;
}

console.log(gradeScore(num));
