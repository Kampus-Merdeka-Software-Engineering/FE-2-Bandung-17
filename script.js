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

var itemCount = 1; // Default item count

  function decrementItem() {
    if (itemCount > 1) {
      itemCount--;
      updateItemCount();
    }
  }

  function incrementItem() {
    itemCount++;
    updateItemCount();
  }

 function removeItem() {
    itemCount = 0;
    updateItemCount();
  }

  function updateItemCount() {
    if (!isNaN(itemCount)) {
      document.getElementById("itemCount").textContent = itemCount;
    } else {
      itemCount = 0;
      document.getElementById("itemCount").textContent = itemCount;
    }
   }
