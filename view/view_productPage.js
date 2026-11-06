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
    <button onclick="goBackToPage('home')">Tilbake til butikk</button>
    
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
            oninput="model.viewState.productPage.userComment=this.value"
            ></textarea>
            <br>
            <button onclick="addComment()"
            style="margin-top: 5px; margin-bottom: 15px;">
            Post kommentar</button>
        </div>
        
        <div>
            ${displayComments(product.id)}
        </div>
    </section>
  `;

  return html;
}

function displayComments(productID){
  let html = ''
  let userReview = ''
  const reviews = model.reviews
  const currentProduct = findCurrentProduct(productID)

  for (let review of reviews) {
    userReview = findUserReview(review.userID)
    console.log("user", userReview)
    console.log("review", review)
    html += /*HTML*/ `
      <div style="border-bottom: 1px solid #d4d4d454">
        <div style="margin-top: 10px;"><img src="img/placeholder-profile.png"
        class="profile-img-container-header"
        >${userReview.userName}, ${review.timestamp}</div>
          <p>${review.stars}</p>
          <p>${review.comment}</p>
      </div>
    
    ` 
  }
  return html
}