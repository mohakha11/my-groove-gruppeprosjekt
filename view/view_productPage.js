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
            <h3 style="font-size: 30px;">${product.title}</h3>
            <img src="${product.img}">
            <div style="font-size: 45px;">★★★★☆</div>
            <p style="color: gray; margin-top: -20px;">4.1 (3)</p>
            <button onclick="location.href='#commentSection'">Kommentarer</button>
        </div>
        <div class="product-right" style="margin-top: 50px;">
            <h3>${product.artist}</h3>
            <p>${product.year}</p>
            <p>${product.label}</p>
            <p>${product.formatID}</p>

            
            <button onclick="addToFavorites(${currentProduct})">Legg til som favoritt</button>
            <div id="feedback-message" style="margin-top: 5px; margin-bottom: 45px; color: green; font-weight: bold;"></div>
            
            <div class="priceAndStock">
            </div>
            <br>
            <div class="amountContainer">
            <div style="font-size: 20px;">Antall:</div>
            <button onclick="setCartAmount('sub')"
            style="border-radius: 50px;">-</button>
            <div id="cartAmount">${model.viewState.productPage.selectedAmount}</div>
            <button onclick="setCartAmount('add')"
            style="border-radius: 50px;">+</button>
            
            </div>
            <br>
            
            <button onclick="addToCart(${currentProduct})">Legg til handlekurv</button>
            <div id="cart-feedback-message" style="margin-top: 5px; color: green; font-weight: bold;"></div>
            <div><strong>${product.price},-</strong></div>
            <div>${product.amount} stk. på lager</div>
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