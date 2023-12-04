// js cart
let cartIcon = document.querySelector("#shopping-cart");
let cart = document.querySelector(".cart");

// open cart
// cartIcon.onclick = () => {
//   cart.classList.add("active");
// };
// close cart
// closeCart.onclick = () => {
//   cart.classList.remove("active");
// };

// cart working js
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
// making function
function ready() {
  // remove items from cart
  var removeCartButtons = document.querySelectorAll(".cart-remove");
  var removeCart = document.querySelectorAll(".cart-box");
  console.log(removeCartButtons);

  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    var cart = removeCart[i];
    button.addEventListener("click", function (event) {
      removeCartItem(event, cart);
    });
  }
}

// remove items from cart
function removeCartItem(event, cart) {
  var buttonClicked = event.target;
  cart.remove();
}
// set value in localstorage
function setStorage() {
  localStorage.setItem("produk-item", JSON.stringify(items));
}

// adding data to localstorage
const attTocartBtn = document.getElementsByClassName("attToCart");
let items = [];
for (let i = 0; i < attTocartBtn.length; i++) {
  attTocartBtn[i].addEventListener("click", function (e) {
    if (typeof Storage !== "undefined") {
      let item = {
        id: i + 1,
        name: e.target.parentElement.children[0].textContent,
        price: e.target.parentElement.children[1].children[0].textContent,
        no: 1,
      };
      if ((JSON, parse(localStorage.getItem("items")) === null)) {
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload();
      } else {
        const localItems = JSON.parse(localStorage.getItem("items"));
        localItems.map((data) => {
          if (item.id == data.id) {
            item.no = data.no + 1;
          } else {
            items.push(data);
          }
        });
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload();
      }
    } else {
      alert("local storage is not working on your browser");
    }
  });
}
