function showFilterLanding(){
    model.viewState.homePage.advanced ^= 1
    updateView()
}

function searchCategory(category){
    model.viewState.homePage.category = category 
    homePage()
    updateView()
}

function sortHomeSearch(value, type){
    let list = model.viewState.homePage.searchResult
    switch (type) {
        case "price":
            if (value === 'low') list.sort((a, b) => a.price - b.price)
            else if (value === 'high') list.sort((a, b) => b.price - a.price)
        case "date":
            if (value === 'oldest') list.sort((a, b) => a.year - b.year)
            else if (value === 'newest') list.sort((a, b) => b.year - a.year)
    }

    document.querySelector('#searchResult').innerHTML = generateProductList(list)
}

