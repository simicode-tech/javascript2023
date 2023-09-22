// let i = 0;
// let n = 5;

// while (i <= n) {
//   console.log(i);
//   i++;
// }
// // 0 1 2 3 4 5

let i = 10;
let n = 0;

// while (i >= n) {
//   console.log(i);
//   i--;
// }

// do {
//     i--;
//   console.log(i);
// } while (i >= n);

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// 2X1 = 2
// 2X2= 4
// 2X3= 6
// ....
// 2X12 = 24
// 3X1 = 3
// 5X12

// let A,let B answers
// AXB=answers
// for (let A = 2; A <= 5; A++) {
//   for (let B = 1; B <= 12; B++) {
//     console.log(A + "X" + B + "=" + A * B);
//   }
// }

// for (let i = 0; i < 10; i++) {
//   if (i == 3) {
//     console.log("i is equal to" + i);
//     break;
//   }
//   console.log(i);
// }
// for (let i = 0; i < 10; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// }

// odd even
// 13579

for (let i = 0; i < 10; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(i);
}
