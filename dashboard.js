const table = document.getElementById("table");
let userStorage = JSON.parse(localStorage.getItem("userInfo"));
console.log(userStorage.length);
document.getElementById("showNumber").innerHTML = userStorage.length;

let i = 1;
let anyName = "";
userStorage.map((user) => {
  anyName += `
        <tr>
            <td>${i++}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
        </tr>
    `;
  table.innerHTML = anyName;
});
