function goToPayPage() {
    model.app.currentPage = 'payPage'
    updateView()
}

function removeCartItem(item){
    model.viewState.cart.splice(item, 1)
    updateView()

}

function totalPriceProducts(){
    let price = 0;
    const cart = model.viewState.cart;
    for (let i = 0; i < cart.length; i++){
        for (let item of model.productsData){
            if (item.id === cart[i].productID){
                price += item.price * cart[i].amount
            }
        }
    }
    return price
}