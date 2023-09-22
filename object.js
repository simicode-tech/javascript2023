// const student = {
//   firstName: "bola",
//   age: 10,
//   color: ["red", "blue"],
//   greet: function () {
//     return "hello" + " " + this.firstName;
//   },
// };
// console.log(student.firstName);
// console.log(student.age);

// console.log(student["age"]);
// console.log(student.color[1]);
// console.log(student.greet());

// let math = {
//   power: function (x, y) {
//     return x ** y;
//   },
//   add: function (x, y) {
//     return x + y;
//   },
//   pie: function () {
//     return 3.142;
//   },
// };

// console.log(math.power(2, 3));
// console.log(math.add(3, 2));

// let r = 2;
// let areaOfCircle = math.pie() * math.power(r, 2);
// console.log(areaOfCircle);
// const person = {
//   name: "Sara",
//   age: 25,
//   gender: "female",
// };

// const { name, age, gender } = person;

// console.log(name);
// console.log(age);
// console.log(gender);

// let numberOne = 1;
// console.log(numberOne);

let products = [
  {
    name: "bag",
    price: 20000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    name: "Hp laptop",
    price: 200000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
  {
    name: "shoe",
    price: 400,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
  },
];

for (let i = 0; i < products.length; i++) {
  let productRender = "";
  const { name, price, description } = products[i];

  productRender += `
  <div class="product">
  <h2 style="color:red">${name}</h2>
  <p>${price}</p>
  <p>${description}</p>
  </div>

  `;
  document.write(productRender);
}
