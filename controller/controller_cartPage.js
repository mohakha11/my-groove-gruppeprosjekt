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

function totalDiscount(){
    let discount = 0;
    const currentUser = model.app.loggedInUserId
    const users = model.usersProfile
    if (!currentUser) return "Du er ikke logget inn"
    for (let i of users) {
        if (i.userID === currentUser){
            switch (i.userRole){
                case 3:
                    discount = totalPriceProducts() * 0.10
                    break;
            }
        }
    }
    return "- " + discount.toLocaleString() + " kr."
}

function totalTax(){
   return totalPriceProducts() * 0.25 

}