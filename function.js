function people() {
  console.log("hello world");
}

people();
people();
people();
people();

function add() {
  console.log(2 + 2);
}

add();

let sum = function () {
  console.log(4 - 2);
};
sum();

function addition(p1, p2) {
  console.log(p1 + p2);
}
addition(2, 3);
addition(10, 5);

addition(10, "A");

function product(name, price) {
  console.log(`name: ${name} - price ${price}`);
}

product("bag", "$10000");

let myFunction = function (a, b = 4) {
  return a + b;
};

console.log(myFunction(2, 3));
// alert(myFunction(7, 8));
console.log(myFunction(4));
console.log(myFunction(4, 2));
// PRT

function interest(p, t, r = 5) {
  let SI = (p * r * t) / 100;
  console.log(SI);
}
interest(20000, 5);
interest(20000, 5, 6);

// call stack
// function multiple(p1, p2) {
//   return p1 * p2;
// }

// function callStack(a, b) {
//   let answers = multiple(3, 2) + a + b;
//   return answers;
// }
// console.log(callStack(4, 3));

// function callBack(a, b, multiple) {
//   let answers = multiple(2, 3) + a + b;
//   return answers;
// }
// console.log(callBack(2, 3, multiple));

// function developer() {
//   return "Software developer";
// }

// function greet(name, message) {
//   console.log(`my name is ${name}. I am a ${message()}`);
// }

// greet("bola", developer);

function product() {
  let productName = "shoe";
  return productName;
}

function productPrice(productValue) {
  product();
  return productValue();
}

console.log(productPrice(product));

let myFunction2 = function () {
  console.log("hello");
};

myFunction2();

let myFunctions = () => {
  console.log("arrow function");
};

myFunctions();

let addTwo = (x, y) => x + y;

console.log(addTwo(2, 3));
let addThree = (x, y, z) => {
  return x + y + z;
};

console.log(addThree(1, 2, 4));

function title() {
  const course = "JavaScript";
  console.log(`I love ${course}`);
}
title();

// console.log("course: " + course);
