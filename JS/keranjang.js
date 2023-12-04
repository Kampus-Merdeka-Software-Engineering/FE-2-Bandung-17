/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
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

  fetchProduct();

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

var ProductId = 0;
function addToLocalStorage(productName, productPrice, productImage) {
  var product = {
    id: ++ProductId,
    name: productName,
    price: productPrice,
    productImage: productImage,
  };
  var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  cartItems.push(product);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  alert("Item added to cart!");
}

document.addEventListener("DOMContentLoaded", function () {
  var addToCartButtons = document.getElementsByClassName("addToCart");

  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function (event) {
      var productName = event.target.closest(".product-item").querySelector(".nama-product h3").innerText;
      var productPrice = event.target.closest(".product-item").querySelector(".nama-product p").innerText;
      var productImage = event.target.closest(".product-item").querySelector(".card-img-top").getAttribute("src");
      addToLocalStorage(productName, productPrice, productImage);
    });
  }
});

function fetchProduct() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  var cartContent = document.querySelector(".cart-content");

  cartContent.innerHTML = "";
  var totalPrice = 0;

  if (cart && cart.length > 0) {
    cart.forEach(function (item) {
      var cartBox = document.createElement("div");
      cartBox.className = "cart-box";
      cartBox.innerHTML = `
          <div class="checklist">
            <input type="checkbox" value="" id="flexCheckDefault" />
            <label for="flexCheckDefault"></label>
          </div>
          <img src="/${item.productImage}" alt="" class="cart-img" />
          <div class="detail-box">
            <h3>${item.name}</h3>
            <div class="cart-price">${item.price !== undefined ? item.price : ""}</div>
            <input type="number" value="${item.quantity}" class="cart-quantity" data-item-id="${item.id}" />
          </div>
          <i class="cart-remove" data-feather="trash-2"></i>
      `;
      cartContent.appendChild(cartBox);
      var int = parseRpStringToInt(item.price);
      totalPrice += int;
    });

    var quantityInputs = document.querySelectorAll(".cart-quantity");
    quantityInputs.forEach(function (input) {
      input.addEventListener("change", function (event) {
        var itemId = event.target.dataset.itemId;
        var newQuantity = parseInt(event.target.value, 10);
        // console.log(newQuantity);

        cart.forEach(function (item) {
          console.log(item.id);
          if (item.id === itemId) {
            item.quantity = newQuantity;
          }
        });
        totalPrice = 0;
        cart.forEach(function (item) {
          var int = parseRpStringToInt(item.price);
          totalPrice += int * newQuantity;
        });

        var totalPriceElement = document.getElementById("totalPrice");
        totalPriceElement.textContent = "Rp." + totalPrice;

        localStorage.setItem("cart", JSON.stringify(cart));
      });
    });

    var totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = "Rp." + totalPrice;
  } else {
    cartContent.innerHTML = "<p>Your cart is empty</p>";
  }

  feather.replace();
}

function parseRpStringToInt(rpString) {
  var cleanedString = rpString.replace(/Rp\.|,/g, "");

  var floatValue = parseFloat(cleanedString) * 1000;
  var intValue = Math.round(floatValue);

  return intValue;
}
