// toogle kelas active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// slider baranda
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
// akhir slider beranda

document.getElementById("beranda").addEventListener("click", function() {
  resetMenuStyles();
  this.style.color = "black";
  this.style.fontWeight = "bold";
});

// var itemCount = 1; // Default item count

//   function decrementItem() {
//     if (itemCount > 1) {
//       itemCount--;
//       updateItemCount();
//     }
//   }

//   function incrementItem() {
//     itemCount++;
//     updateItemCount();
//   }

//  function removeItem() {
//     itemCount = 0;
//     updateItemCount();
//   }

//   function updateItemCount() {
//     if (!isNaN(itemCount)) {
//       document.getElementById("itemCount").textContent = itemCount;
//     } else {
//       itemCount = 0;
//       document.getElementById("itemCount").textContent = itemCount;
//     }
//    }

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

// Keranjang
if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

// Making function
function ready(){
  // Remove item From Cart
  var removeCartButtons = document.getElementsByClassName('cart-remove')
  console.log(removeCartButtons)
  for(var i = 0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i]
    button.addEventListener("click", removeCartItem)
  }
  
  // Quantity Changes
  var quantityInputs = document.getElementsByClassName('cart-quantity')
  for (var i=0; i < quantityInputs.length; i++){
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }
  // Add to Cart
  var addCart =document.getElementsById('shopping-cart-button')
  for (var i=0; i < addCart.length; i++){
    var button = addCart[i];
    input.addEventListener('click', addCartClicked);
  }
  alert('hll')
}

// Remove item From Cart
function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
}

// Quantity Changes
function quantityChanged(event){
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updatetotal();
}

// Add to Cart
function addCartClicked(event){
  var buttonCartClicked = event.target;
  var shopProducts = buttonCartClicked.parentElement
  var title = shopProducts.getElementsByClassName('product-title').innerText
  var price = shopProducts.getElementsByClassName('price')[0].innerText
  var productImg = shopProducts.getElementsByClassName('product-img')[0].scr
  addProductToCart(title, price, productImg);
  updatetotal();
}

function addProductToCart(title, price, productImg){
  var cartShopBox = document.createElement('div')
  // cartShopBox.classList.add('trash-icon')
  var cartItems = document.getElementsByClassName('cart')[0]
  var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
  for (var i = 0; i < cartItemsNames.length; i++){
    alert('You have already add this item to cart')
  }

}

// Update total
function updatetotal(){
  var cart = document.getElementsByClassName('cart')[0];
  var cartBoxes = cart.getElementsByClassName('trash-icon')[0];
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++){
    var cartBox = cartBoxes[i]
    var priceElemen = cartBox.getElementsByClassName('cart-price')
    var quantityELement = cartBox.getElementsByClassName('cart-quantity') 
    var price = priceElemen.innerText.replace("Rp", "")
    var quantity = quantityELement.value
    total = total + (price * quantity)

    // if price contain some cents value

    document.getElementsByClassName('total-price')[0].innerText = "Rp" + total;
  }
}



