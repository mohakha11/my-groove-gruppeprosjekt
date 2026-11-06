function addToCart(productID) {
  let cart = model.viewState.cart;
  cart.push({
    productID: productID,
    amount: model.viewState.productPage.selectedAmount,
  });
  model.viewState.productPage.selectedAmount = 1;

  updateView();
}

function goToProductPage(productID) {
  model.app.currentPage = "productPage";
  model.viewState.productPage.currentProductID = productID;
  updateView();
}

function setCartAmount(value) {
  let amount = model.viewState.productPage.selectedAmount;
  if (value === "add") amount++;
  else if (value === "sub") {
    if (amount === 1) return;
    amount--;
  }
  model.viewState.productPage.selectedAmount = amount;

  document.querySelector("#cartAmount").innerHTML = amount;
}

function addToFavorites(productID) {
  const currentUser = findLoggedInUser();
  const products = model.productsData
      for (let obj of products) {
        if (obj.id === productID){
        currentUser.favorites.push(obj.id);
    }
  }
}

function addComment(productID){
  
}