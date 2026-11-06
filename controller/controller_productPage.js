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

function findCurrentProduct(productID){
  for (let product of model.productsData){
    if (product.id === productID) return product
  }
}

function addComment(productID){

}

function displayComments(productID){
  let html = ''
  let userReview = ''
  const reviews = model.reviews
  const currentProduct = findCurrentProduct(productID)

  //Objektet til produktet
  for (let review of reviews) {
    userReview = findUserReview(review.userID)
    console.log("user", userReview)
    console.log("review", review)
    html += /*HTML*/ `
      <div>
        <img src="img/placeholder-profile.png">
          <p>${userReview.userName} ${review.timeStamp}</p>
  
            <p>★★★☆☆</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      
      </div>
    
    ` 
  }
  return html
}


function findUserReview(userID){
  const users = model.usersProfile;
  for (let user of users) {
    if (user.userID === userID) return user
  }

}