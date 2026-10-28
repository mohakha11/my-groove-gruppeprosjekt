function addToCart(productID){
    let cart = model.viewState.cart 
    cart.push({productID: productID, amount: model.viewState.productPage.selectedAmount})
}


function goToProductPage(productID){
    model.app.currentPage = 'productPage'
    model.viewState.productPage.currentProductID = productID
    updateView()
}

function setCartAmount(value){
    let amount = model.viewState.productPage.selectedAmount;
    if (value === 'add') amount ++;
    else if (value === 'sub') {
        if (amount === 1) return
        amount --;
    }
    model.viewState.productPage.selectedAmount = amount;

    document.querySelector('#cartAmount').innerHTML = amount
}