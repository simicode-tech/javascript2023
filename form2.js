const myForm = document.getElementById("myForm");
const password = document.getElementById("password");
const email = document.getElementById("email");
const username = document.getElementById("username");
const errorMessage = document.getElementById("errorMessage");

myForm.addEventListener("submit", formValidation);
let output;
function formValidation(e) {
  e.preventDefault();
  if (username.value.length === 0 || password.value.length === 0) {
    output = "invalid username or password";
    errorMessage.innerHTML = output;
    errorMessage.classList.add("danger");
  } else if (password.value.length < 6) {
    output = "Password must be at least 6 characters";
    errorMessage.innerHTML = output;
    errorMessage.classList.add("danger");
  } else if (email.value.length === 0) {
    output = "invalid email";
    errorMessage.innerHTML = output;
    errorMessage.classList.add("danger");
  } else {
    output = "Sucessfully";
    errorMessage.innerHTML = output;
    errorMessage.classList.remove("danger");
    errorMessage.classList.add("success");
    email.value = "";
    password.value = "";
    username.value = "";
  }
}
