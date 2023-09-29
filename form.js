// const myForm = document.getElementById("myForm");
// const username = document.getElementById("username");
// const password = document.getElementById("password");

// console.log(myForm);
// myForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(password.value);
//   console.log(username.value);
// });

const todoForm = document.getElementById("form");
const todo = document.getElementById("todo");
const todoText = document.querySelector(".todoText");
todoForm.addEventListener("submit", todoApp);

let output;
function todoApp(e) {
  e.preventDefault();
  const li = document.createElement("li");
  if (todo.value === "") {
    alert("Please enter a value");
  } else {
    output = todo.value;
    li.append(output);
    todoText.appendChild(li);
  }
}
