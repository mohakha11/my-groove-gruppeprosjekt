function showFilterLanding(){
    model.viewState.homePage.advanced ^= 1
    updateView()
}

function searchProductHome2(search){
    model.viewState.homePage.search = search
    generateProductHome(search)
    updateView()
    //sortHomeSearch(search, 'input')
}

function sortHomeSearch(value='', type=''){
    //let list
    if (type === 'input') {

    }
    if (type === 'price') sortByPrice(value)

}

function sortByPrice(value){
    let list = model.viewState.homePage.searchResult
    let html = ''
    if (value === 'low'){ 
        list.sort((a, b) => a.price - b.price)
    } else if (value === 'high'){
        list.sort((a, b) => b.price - a.price)
    }
    for (let i = 0; i < list.length; i++){
    html += /*HTML*/ `
        <section class="product" onclick="goToProductPage(${list[i].id})" >
            <img class="previewimg" 
            src="${list[i].img}">
            <div>${list[i].title}</div>
            <div>${list[i].artist}</div>
            <div>${list[i].price},- kr.</div>

        </section>
        <br>
    `
    }

    document.querySelector('#searchResult').innerHTML = html
}
