// const user = document.getElementById("user");
// console.log(user.dataset.id);
// console.log(user.dataset.password);
// console.log(user.dataset.dateOfBirth);
const btn = document.querySelectorAll(".filter-button");
const listItem = document.querySelectorAll(".filterable-item");
console.log(btn);

const product = ["bag", "laptop"];
const searchInput = document.getElementById("searchInput");
const newData = [];
async function apiData() {
  const resp = await fetch("https://fakestoreapi.com/products");
  const data = await resp.json();
  data.map((product) => {
    newData.push(product);
  });
}

searchInput.addEventListener("input", filterProduct);

async function filterProduct() {
  await apiData();
  console.log(newData);

  const productData = newData.map((product) => product);
  const products = productData.filter((item) => {
    const itemData = item.title
      .toLowerCase()
      .includes(searchInput.value.toLowerCase());
    return itemData;
  });
  displayProduct(products);
}

async function displayProduct(products) {
  await apiData();
  if (products) {
    let displayProduct = "";
    products.forEach((item) => {
      displayProduct += `
        <div class="col-md-4">
        <div class="card cardImg" >
          <img src=${item.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
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
  } else {
    let displayProduct = "";

    newData.forEach((item) => {
      displayProduct += `
        <div class="col-md-4">
        <div class="card cardImg" >
          <img src=${item.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
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
}
displayProduct();
// // const grades = ["A", "F", "D", "A", "B", "E", "B", "E", "B", "C"];
// const grades = ["F", "D", "E", "f"];
// const passGrades = grades.filter(function (grade) {
//   let passGrade = ["A", "B", "C"];
//   if (passGrade.includes(grade)) {
//     return grade;
//   } else {
//     console.log("No result found");
//   }
// });
// console.log(passGrades);
