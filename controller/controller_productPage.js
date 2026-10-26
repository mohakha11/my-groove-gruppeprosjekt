function addToCart(productID, amount){
    let cart = model.viewState.cart 
    cart.push({productID: productID, amount: amount})
    console.log(cart) //amount kommer opp som 1 uansett, må fikses
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