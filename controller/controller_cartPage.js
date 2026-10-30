function goToPayPage() {
    model.app.currentPage = 'payPage'
    updateView()
}

function removeCartItem(item){
    model.viewState.cart.splice(item, 1)
    updateView()

}