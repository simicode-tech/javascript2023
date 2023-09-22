function show() {
  alert("Welcome to event");
}

const cardImg = document.getElementById("cardImg");
function over() {
  cardImg.classList.add("cardBody");
  const image = cardImg.firstElementChild;
  image.setAttribute("src", "images/img2.jpeg");
}
function out() {
  cardImg.classList.remove("cardBody");
  const image = cardImg.firstElementChild;
  image.setAttribute("src", "images/img1.jpeg");
}
