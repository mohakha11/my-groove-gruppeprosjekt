function addToCart(productID){
    console.log(productID)
}


function goToProductPage(productID){
    model.app.currentPage = 'productPage'
    model.viewState.productPage.currentProductID = productID
    updateView()
}