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
