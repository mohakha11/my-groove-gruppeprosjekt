function addToCart(productID) {
  let cart = model.viewState.cart;
  cart.push(
    {
    productID: productID,
    amount: model.viewState.productPage.selectedAmount,
    }
  );
  model.viewState.productPage.selectedAmount = 1;
  updateView();
}

function goToProductPage(productID) {
  model.app.currentPage = "productPage";
  model.viewState.productPage.currentProductID = productID;
  window.scrollTo(0, 0); /*Mk*/
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

function findCurrentProduct(productID){
  for (let product of model.productsData){
    if (product.id === productID) return product
  }
}

function addComment(productID){
  const currentUser = findLoggedInUser()
  function setTime(){
    const timestamp = new Date().getTime();
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }
  model.reviews.unshift(
    {
      productID: 2,
      userID: currentUser.userID,
      comment: model.viewState.productPage.userComment,
      stars: "★★★☆☆",
      timestamp: setTime(),
    }
  );

  updateView()
}

function findUserReview(userID){
  const users = model.usersProfile;
  for (let user of users) {
    if (user.userID === userID) return user
  }
}