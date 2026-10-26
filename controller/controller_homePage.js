function showFilterLanding(){
    model.viewState.homePage.advanced ^= 1
    updateView()
}


function sortHomeSearch(value, type){
    //pathen funker så langt
    if (type === 'price') sortByPrice(value)


}

function sortByPrice(value){
    //funker inn hit og
    if (value === 'low'){ 
        console.log('lav pris')
    }
    if (value === 'high'){
        console.log('høy pris')
    }

}
