function goToPayPage() {
    model.app.currentPage = 'payPage'
    updateView()
}

function removeCartItem(item, index){
    console.log(item)
    console.log(index)
}