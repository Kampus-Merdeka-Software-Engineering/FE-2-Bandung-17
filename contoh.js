const response = await fetch(baseURL + '/', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email}),
      });
const result = await response.json();
const outputHTML = result.map((el) => {
                return `
        <div class="col">
          <div class="product-item" style="width: 18rem">
            <img src=${el.img_url} class="card-img-top" alt="Food_Cookies" />
            <div class="nama-product">
              <h3>${el.menu_name}s</h3>
              <p>${el.menu_price}</p>
              <div class="list-group">
                <a href="#" id="shopping-cart-button" class="addToCart"><i data-feather="shopping-cart"></i></a>
                <a href="#popup2">Detail</a>
                <a href="#">Bayar</a>
              </div>
            </div>
          </div>
        </div>

        <div id="popup2" class="overlay">
          <div class="popup">
            <img src=${el.img_url} class="card-img-top" alt="Food_Cookies" />
            <a class="close" href="#1">&times;</a>
            <div class="content">
              <h3>${el.menu_name}</h3>
              <p>${el.menu_price}</p>
              <p>${el.menu_description}</p>
            </div>
          </div>
        </div>
                `
            }).join('')
output.innerHTML = outputHTML;
