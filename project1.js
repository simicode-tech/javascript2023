let products = [
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

function renderProduct() {
  let displayProduct = "";
  products.forEach((item) => {
    displayProduct += `
      <div class="col-md-4">
      <div class="card cardImg" >
        <img src=${item.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">
           ${item.price}
          </p>
          <p class="card-text">
           ${item.description}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
      `;
    document.getElementById("product").innerHTML = displayProduct;
  });
}
renderProduct();

const linkItem = document.querySelectorAll(".nav-item");
const navLink = document.querySelectorAll(".nav-link");
linkItem.forEach((link) => {
  link.addEventListener("click", function (e) {
    console.log(link);
    console.log(link.classList.contains("nav-link"));
  });
});
// const linkItems = document.querySelectorAll(".nav-item");

// linkItems.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     // Toggle the "active" class on the clicked element
//     link.classList.toggle("active");

//     // Remove the "active" class from other elements
//     linkItems.forEach((otherLink) => {
//       if (otherLink !== link) {
//         otherLink.classList.remove("active");
//       }
//     });

//     // Check if the clicked element contains the "nav-link" class
//     const containsNavLinkClass = link.classList.contains("nav-link");

//     console.log("Clicked element:", link);
//     console.log("Contains 'nav-link' class:", containsNavLinkClass);
//   });
// });
