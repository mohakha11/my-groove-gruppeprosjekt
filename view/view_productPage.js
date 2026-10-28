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
        <div>
            <img src="${product.img}">
            <div>★★★★☆</div>
            <button>Kommentarer</button>
        </div>

        <div>
            <h3>${product.artist}</h3>
            <h3>${product.title}</h3>
            <p>${product.year}</p>
            <p>${product.label}</p>
            <p>${product.formatID}</p>

            <p>Antall: 
                <button
                onclick="setCartAmount('sub')"
                >&lt;</button>
                <p id="cartAmount">${model.viewState.productPage.selectedAmount}</p>
                <button
                onclick="setCartAmount('add')"
                >&gt;</button>
            </p>
            <button onclick="addToCart(${currentProduct})">Legg til handlekurv</button>

        <div>
            <p>${product.price},-</p>
            <p>□ På lager</p>
        </div>

        <div>
            <img src="img/placeholder-profile.png">
            <input placeholder="legg til kommentar">
        </div>
        
        <div>
            <img src="img/placeholder-profile.png">
            <p>brukernavn</p>
            <p>1.12.2020 ★★★★☆</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
            <img src="img/placeholder-profile.png">
            <p>brukernavn2</p>
            <p>2.12.2020 ★★★☆☆</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
            <img src="profileImage">
            <p>brukernavn3</p>
            <p>3.12.2020 ★★☆☆☆</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

    
    `;

  return html;
}
