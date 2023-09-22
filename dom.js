const result = document.getElementById("result");

result.style.backgroundColor = "indianred";
result.style.color = "white";
result.style.fontFamily = "Helvetica";
result.style.border = "1px solid white";
result.style.width = "300px";
result.style.margin = "auto";

const paragraph = document.getElementById("intro");
paragraph.className = "list";
paragraph.className = "good";
console.log(paragraph);
const paragraph2 = document.getElementById("good");
paragraph2.classList.add("wow");
paragraph2.classList.add("list");

paragraph2.classList.remove("good");
paragraph2.classList.toggle("show");
paragraph2.classList.toggle("list");

if (paragraph2.classList.contains("wow")) {
  paragraph2.classList.remove("wow");
  paragraph2.classList.add("add");
} else {
  alert("no");
}
