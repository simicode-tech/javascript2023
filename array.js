let number = [1, 2, 3, 4];

console.log(number[0]);
console.log(number[2]);
console.log(number[3]);

const cars = ["Toyota", "Volvo", "BMW"];

console.log(cars[2]);
console.log(cars[0]);

// cars[0] = "Lexus";
// console.log(cars);
// cars[3] = "Ferrari";
// console.log(cars);
// console.log(cars[3]);
let cars2 = [...cars, "Lexus", "Ferrari"];

console.log(cars2);
let quizQuestions = [
  ["What is the capital of Lagos State?", "Ikeja", "Agege", "Mushin"],
  ["What is the capital of Kaduna State?", "Kagoro", "Kachia", "Kaduna"],
];

console.log(quizQuestions[0][0]);
console.log(quizQuestions[0][1]);
console.log(quizQuestions[0][2]);
console.log(quizQuestions[0][3]);

console.log(quizQuestions[1][0]);
console.log(quizQuestions[1][3]);
