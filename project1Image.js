let products1 = [
  {
    name: "bag",
    price: 20000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    image: "images/img1.jpeg",
    images: {
      img: "images/img2.jpeg",
    },
  },
  {
    name: "Hp laptop",
    price: 200000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    image: "images/img2.jpeg",
    images: {
      img: "images/img1.jpeg",
    },
  },
  {
    name: "shoe",
    price: 400,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    image: "images/img1.jpeg",
    images: {
      img: "images/img2.jpeg",
    },
  },
  {
    name: "shoe",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
    image: "images/img1.jpeg",
    images: {
      img: "images/img2.jpeg",
    },
  },
];
const cardImg = document.getElementsByClassName("cardImg");
console.log(cardImg);
for (let i = 0; i < cardImg.length; i++) {
  cardImg[i].addEventListener("mouseover", () => {
    const imageItem = cardImg[i].firstElementChild;
    for (let i = 0; i < products1.length; i++) {
      const productImage = products1[i].images.img;
      imageItem.setAttribute("src", productImage);
    }
  });
  cardImg[i].addEventListener("mouseout", () => {
    const imageItem = cardImg[i].firstElementChild;
    for (let i = 0; i < products1.length; i++) {
      const productImage = products1[i].image;
      imageItem.setAttribute("src", productImage);
    }
  });
}
// function over() {
//   cardImg.classList.add("cardBody");
//   const image = cardImg.firstElementChild;
//   image.setAttribute("src", "images/img2.jpeg");
// }
// function out() {
//   cardImg.classList.remove("cardBody");
//   const image = cardImg.firstElementChild;
//   image.setAttribute("src", "images/img1.jpeg");
// }
