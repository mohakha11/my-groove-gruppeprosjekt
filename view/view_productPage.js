function productPage() {
  let currentProduct = model.viewState.productPage.currentProductID;
  let product = {};

  for (let i = 0; i < model.productsData.length; i++) {
    if (model.productsData[i].id === currentProduct) {
      product = model.productsData[i];
      break;
    }
  }

  let html = /*HTML*/ `
    <button onclick="goBackToPage('home')">Tilbake</button>
    
    <section id="productInfoSection">
        <div class="product-left">
            <img src="${product.img}">
            <div>★★★★☆</div>
            <button onclick="location.href='#commentSection'">Kommentarer</button>
        </div>
        <div class="product-right">
            <h3>${product.artist}</h3>
            <h3>${product.title}</h3>
            <p>${product.year}</p>
            <p>${product.label}</p>
            <p>${product.formatID}</p>

            <button onclick="addToCart(${currentProduct})">Legg til handlekurv</button>
            <button onclick="addToFavorites(${currentProduct})">Legg til som favoritt</button>

            <div class="priceAndStock">
                <div><strong>${product.price},-</strong></div>
                <div>${product.amount} stk. på lager</div>
            </div>
            <div class="amountContainer">
                <div>Antall:</div>
                <button onclick="setCartAmount('sub')">&lt;</button>
                <div id="cartAmount">${model.viewState.productPage.selectedAmount}</div>
                <button onclick="setCartAmount('add')">&gt;</button>
            </div>
        </div>
    </section>



    <section id="commentSection">
        <div>
            <img src="img/placeholder-profile.png">
            <textarea type="text" placeholder="Skriv kommentar" 
            style="height: 85px; width: 500px;"
            ></textarea>
            <br>
            <button onclick="addComment()"
            style="margin-top: 5px; margin-bottom: 20px;">
            Post kommentar</button>
        </div>
        
        <div>
            <img src="img/placeholder-profile.png">
            <p>brukernavn</p>
            <p>1.12.2020 ★★★★☆</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div>
            <img src="img/placeholder-profile.png">
            <p>brukernavn2</p>
            <p>2.12.2020 ★★★☆☆</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div>
            <img src="profileImage">
            <p>brukernavn3</p>
            <p>3.12.2020 ★★☆☆☆</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
    </section>
  `;

  return html;
}