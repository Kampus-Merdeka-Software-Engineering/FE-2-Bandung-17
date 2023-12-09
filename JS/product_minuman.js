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
// integration
const apiUrl = "https://be-2-bandung-17-production.up.railway.app";

document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes("product_minuman.html")) {
    await fetchAllProducts();
  }
});

const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${apiUrl}/product`);
    const product = await response.json();
    console.log(product);
    displayProducts(product);
  } catch (error) {
    console.log("Error:", error);
  }
};
const displayProducts = (product) => {
  const section = document.getElementById("output");
  product.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="col">
           <div class="product-item" style="width: 18rem">
             <img src=${product.imageUrl} class="card-img-top" alt="${product.name}" referrerpolicy="no-referrer"/>
             <div class="nama-product">
               <h3>${product.name}</h3>
               <p>${product.price}</p>
               <div class="list-group">
                 <a href="#" id="shopping-cart-button" class="addToCart"><i data-feather="shopping-cart"></i></a>
                 <a href="#popup${product.id}">Detail</a>
                 <a href="#">Bayar</a>
               </div>
             </div>
           </div>
         </div>

         <div id="popup${product.id}" class="overlay">
           <div class="popup">
             <img src=${product.imgUrl} class="card-img-top" alt="${product.name}" referrerpolicy="no-referrer"/>
             <a class="close" href="#">&times;</a>
             <div class="content">
               <h3>${product.name}</h3>
               <p>${product.price}</p>
               <p>${product.description} </p>
             </div>
           </div>
         </div>
         `;
    section.appendChild(div);
  });
};

// cara syahrul
// const apiUrl = "http://localhost:4000/product";

// const fetchAllProducts = async () => {
//   try {
//     const response = await fetch(apiUrl);
//     const products = await response.json();
//     console.log(products);
//     displayProducts(products);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// };

// const displayProducts = (products) => {
//   const outputDiv = document.getElementById("output");
// };
// products.forEach((product) => {
//   const productHTML = document.createElement("div");
//   productHTML.classList.add("col");
//   productHTML.innerHTML = `
//             <div class="product-item" style="width: 18rem;">
//                 <img src="${product.imageUrl}" class="card-img-top" alt="Product_Image" />
//                 <div class="nama-product">
//                     <h3>${product.name}</h3>
//                     <p>${product.price}</p>
//                     <div class="list-group">
//                         <a href="#" id="shopping-cart-button" class="addToCart"><i data-feather="shopping-cart"></i></a>
//                         <a href="#popup${product.id}">Detail</a>
//                         <a href="#">Bayar</a>
//                     </div>
//                 </div>
//             </div>
//             <div id="popup${product.id}" class="overlay">
//                 <div class="popup">
//                     <img src="${product.imageUrl}" class="card-img-top" alt="Product_Image" />
//                     <a class="close" href="#1">&times;</a>
//                     <div class="content">
//                         <h3>${product.name}</h3>
//                         <p>${product.price}</p>
//                         <p>${product.description}</p>
//                     </div>
//                 </div>
//             </div>
//         `;
//   outputDiv.appendChild(productHTML);
// });

// cara kak nabil
// const response = await fetch("http://localhost:4000/product", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// const product = await response.json();
// const outputHTML = product
//   .map((product) => {
//     return `
//         <div class="col">
//            <div class="product-item" style="width: 18rem">
//              <img src=${product.imgUrl} class="card-img-top" alt="Food_Cookies" />
//              <div class="nama-product">
//                <h3>${product.name}s</h3>
//                <p>${product.price}</p>
//                <div class="list-group">
//                  <a href="#" id="shopping-cart-button" class="addToCart"><i data-feather="shopping-cart"></i></a>
//                  <a href="#popup2">Detail</a>
//                  <a href="#">Bayar</a>
//                </div>
//              </div>
//            </div>
//          </div>

//          <div id="popup2" class="overlay">
//            <div class="popup">
//              <img src=${product.imgUrl} class="card-img-top" alt="Food_Cookies" />
//              <a class="close" href="#1">&times;</a>
//              <div class="content">
//                <h3>${product.name}</h3>
//                <p>${product.price}</p>
//                <p> ini deskripsi </p>
//              </div>
//            </div>
//          </div>
//                 `;
//   })
//   .join("");
// output.innerHTML = outputHTML;
