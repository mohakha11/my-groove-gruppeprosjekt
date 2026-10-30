function showFilterLanding(){
    model.viewState.homePage.advanced ^= 1;
    updateView();
}

function searchCategory(category){
    model.viewState.homePage.category = category;
    homePage();
    updateView();
}

function sortHomeSearch(value, type){
    let list = model.viewState.homePage.searchResult;
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



function searchAll(){
    let search = model.viewState.homePage.search
    return model.viewState.homePage.searchResult = model.productsData.filter(item => 
            item.label.toLowerCase().includes(search.toLowerCase()) ||
            item.artist.toLowerCase().includes(search.toLowerCase()) ||
            item.title.toLowerCase().includes(search.toLowerCase())
        )
}

function searchVinyl(){
    let search = model.viewState.homePage.search
    let category = model.viewState.homePage.category
    let result = model.viewState.homePage.searchResult = model.productsData.filter(item => 
            item.label.toLowerCase().includes(search.toLowerCase()) ||
            item.artist.toLowerCase().includes(search.toLowerCase()) ||
            item.title.toLowerCase().includes(search.toLowerCase())
        )

    console.log(result)
}


function searchCD(){
    
}

function searchCassette(){
    
}
