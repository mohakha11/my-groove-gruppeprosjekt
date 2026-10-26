function showFilterLanding(){
    model.viewState.homePage.advanced ^= 1
    updateView()
}

function sortByPrice(price){
    if (price === 'low'){ 
        console.log('lav pris')
    }
    if (price === 'high'){
        console.log('høy pris')
    }

}
