// const result = document.getElementById("result");

// result.classList.add("item");
// console.log(result);
// const firstChild = result.firstElementChild;
// console.log(firstChild);
// firstChild.classList.add("active");
// if (firstChild.classList.contains("active")) {
//   firstChild.classList.remove("active");
//   result.lastElementChild.classList.add("active");
// }

// const body = document.querySelector("body");
// const pElement = document.createElement("p");
// const pText = document.createTextNode("I love javascript");
// pElement.appendChild(pText);
// body.appendChild(pElement);

// // href, target
// const a = document.createElement("a");
// a.href = "https://facebook.com/";
// a.target = "_blank";
// a.textContent = "Facebook";

// body.appendChild(a);

// const display = document.querySelector(".display");
// display.remove();

// const result = document.querySelector("#result");
// const list = document.querySelector("#list");

// result.removeChild(list);
// result.removeChild(result.lastElementChild);

// const div = document.createElement("div");
// div.setAttribute("class", "item");
// div.setAttribute("id", "good");
// div.textContent = "hello class";
// body.appendChild(div);

// inner text

const div = document.createElement("div");

div.innerText = "Inner Text ";
document.body.appendChild(div);

div.innerHTML = "<h1>Inner Html</h1>";
document.body.appendChild(div);
