const foodList = document.getElementById("food");
const inputText = document.getElementById("todoText");
const textContainer = document.querySelector(".textBody");
foodList.addEventListener("submit", todoApp);
let output;
function todoApp(e) {
  e.preventDefault();
  if (inputText.value === "") {
    alert("Please enter a text");
  } else {
    output = inputText.value;
    const li = document.createElement("li");
    li.append(output);
    textContainer.appendChild(li);
  }
  //   console.log(li);
}
