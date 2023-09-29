// localStorage.setItem("user", "Lola");

// const userName = localStorage.getItem("user");

// console.log(userName);

// const product = {
//   id: 1,
//   name: "laptop",
//   price: 2000,
// };

// localStorage.setItem("product", JSON.stringify(product));
// const displayProduct = JSON.parse(localStorage.getItem("product"));
// console.log(displayProduct.id);

const username = document.getElementById("username");
const password = document.getElementById("password");
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", validForm);

let users = [];
function validForm(e) {
  e.preventDefault();
  let userDetails = {
    username: username.value,
    password: password.value,
  };
  users.push(userDetails);
  localStorage.setItem("userInfo", JSON.stringify(users));
}
