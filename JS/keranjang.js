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

// adding data to localstorage
const attTocartBtn = document.getElementsByClassName("attToCart");
let items = [];
for (let i = 0; i < attTocartBtn.length; i++) {
  attTocartBtn[i].addEventListener("click", function (e) {
    console.log(e.target.parentElement.children[0]);
    if (typeof Storage !== "undefined") {
      let item = {
        id: i + 1,
        name: e.target.parentElement.children[0],
      };
    } else {
      alert("local storage is not working on your browser");
    }
  });
}
