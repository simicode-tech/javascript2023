// // let number = "2";
// // console.log(number);

// // let myName = "bola";
// // console.log(myName);
// // let student;

// // console.log(student);
// // student = "bolaji";
// // console.log(student);

// // student = "tomiwa";
// // console.log(student);
// // let student1 = "jan";
// // console.log(student1);

// // const pie = 3.142;
// // console.log(pie);

// // var car = "lexus";
// // console.log(car);

// // var car = "benz";
// // console.log(car);
// // var car;
// // console.log(car);

// // let numberOne;
// // let numberTwo;
// // let numberThree;
// // numberOne = 1;
// // numberTwo = 2;
// // numberThree = 3;
// // console.log(numberOne, numberTwo, numberThree);

// /*
// -----------------------------
//     String Data Types
// -----------------------------
// */

// // let number = "2";
// // console.log(typeof number);
// // let myName = "janet";
// // console.log(typeof myName);
// // let company = "Alabian solution's limited";
// // console.log(company);
// // company = '"Alabian Solutions is the best" - W3C';
// // console.log(company);
// // company = "Alabian solution's limited";
// // console.log(company);
// // let product = "bag";
// // console.log(product);

// /*
// -----------------------------
//     Number Data Types
// -----------------------------
// */

// let number = 123;
// console.log(typeof number);
// let numberOne = 2.1;
// console.log(typeof numberOne);

// let numberTwo = 1e6;
// console.log(typeof numberTwo);
// let numberThree = 3 * "e";
// console.log(numberThree);

// /*
// -----------------------------
//     Boolean Data Types
// -----------------------------
// */

// // let isRich = true;
// // let isHtml = false;
// // console.log(typeof isRich);
// // console.log(typeof isHtml);

// let name = "My name is janet.";
// let program = "full stack developer ";

// let ans = name + " " + "I'm a" + " " + program;
// console.log(ans);

// let output = "2" + 4;
// console.log(output);

// ans = `${name} I'm a ${program} `;
// console.log(ans);

// let a = 2,
//   b = 5;
// let output1;

// output1 = a + b;
// console.log(output1);

// output1 = a * b;

// console.log(output1);

// // 1/2bh

// let h = 12;
// let base = 3;
// let areaOfTriangle = (1 / 2) * base * 12;
// console.log(areaOfTriangle);

let pie = 3.142;
let r = 5;
// let areaOfCircle = pie * r * r;
// console.log(areaOfCircle);

// let areaOfCircle2 = pie * r ** 2;
// console.log(areaOfCircle2);

// let a = 4;
// let b = 8;

// let ans = b / a;
// console.log(ans);

// let c = 11;
// let d = 7;

// let result = c % d;
// console.log(result);

// console.log(c % d);

// let number = 5;
// console.log(number);
// ++number;
// ++number;
// ++number;
// console.log(number);
// --number;
// console.log(number);
// number += 5;
// console.log(number);
// let x = 24;
// let y = 25;
// console.log(x == y);
// console.log(x != y);

// let x1 = "4";
// let y1 = 4;
// console.log(x1 == y1);
// console.log(x1 === y1);
// console.log(x1 !== y1);

// let x2 = 10;
// let y2 = 2;

// console.log(x2 > y2);

// let x3 = 10;
// let y3 = 10;

// console.log(x3 >= y3);

// console.log(y2 < x2);

// let user = "bola";

// console.log(user === "janet");

let user1 = "janet111";
let age = 12;
// console.log(user1 === "janet");
// console.log(age === 13);
// console.log(user1 === "janet" && age === 13);
// console.log(user1 === "janet" || age === 13);
// console.log(user1 === "janet" && !(age === 13));
if (user1 === "janet") {
  console.log(`hello ${user1}`);
} else {
  console.log(`invalid username ${user1}`);
}

// let product = prompt("please make an order");

// if (product === "bag") {
//   alert("You order for bag");
// } else if (product === "laptop") {
//   alert("You order for laptop");
// } else {
//   alert("The product you order for is not available");
// }
// product === "bag"
//   ? alert("You order for bag")
//   : product === "laptop"
//   ? alert("You order for laptop")
//   : alert("The product you order for is not available");

let grade = prompt("enter your grade");

if (grade >= 70 && grade <= 100) {
  alert("A");
}
