function homePage(){
    let category = model.viewState.homePage.category
    let buttons = /*HTML*/ `
        <section id="category">
            <div 
            class="category-btn"
            onclick="searchCategory('alt')">Hele butikken</div>
            <div 
            class="category-btn"
            onclick="searchCategory('vinyl')">Vinyl</div>
            <div 
            class="category-btn"
            onclick="searchCategory('cd')">CD</div>
            <div 
            class="category-btn"
            onclick="searchCategory('kassett')">Kassett</div>
            <div 
            class="category-btn"
            onclick="searchCategory('nyheter')">Nyheter</div>
        </section>

        <section id="show-category">
            <button onclick="showFilterLanding()">
            Avansert søk</button>
            <div>${showHomeCategory()}</div>
        </section>
        `
    let advancedFilter = ''
    if (category !== 'nyheter') {
        advancedFilter = /*HTML*/` 
        <div>${filterButton()}</div>
        <div id="searchResult">${generateProductHome()}</div>
        `
    } 

    let html = buttons + advancedFilter
    
    return html
}

function showHomeCategory(){
    let html = ''
    let category = model.viewState.homePage.category
    if (category === 'alt') html = /*HTML*/ `
        <input placeholder="Søk i butikken"
        onchange="searchProductHome(this.value)">
    ` 
    if (category === 'vinyl') html = /*HTML*/ `
        <input placeholder="Søk i vinyl"
        onchange="searchProductHome(this.value)">
    ` 
    if (category === 'cd') html = /*HTML*/ `
        <input placeholder="Søk i CD'er"
        onchange="searchProductHome(this.value)">
    `
    if (category === 'kassett') html = /*HTML*/ `
        <input placeholder="Søk i kassetter"
        onchange="searchProductHome(this.value)">
    `
    if (category === 'nyheter') html = /*HTML*/ `
        <div>Nyheter kommer her!</div>
    `

    return html
}


function filterButton(){
    const filter = model.viewState.homePage.advanced
    if (filter){
        let checkbox = /*HTML*/ `
        <section id="test">
            <b>Pris:</b>
            <input type="radio" 
            name="price"
            value="low"
            onchange="sortHomeSearch(this.value, 'price')">
            Pris Lav

            <input type="radio" 
            onchange="sortHomeSearch(this.value, 'price')"
            name="price"
            value="high">
            Pris Høy

            <b>Dato:</b>
            <input type="radio"
            name="date"
            value="newest"
            onchange="sortHomeSearch(this.value, 'date')">
            Ny - Eldst

            <input type="radio"
            name="date"
            value="oldest"
            onchange="sortHomeSearch(this.value, 'date')">
            Eldst - Ny
        </section>    
        `
        let buttons = /*HTML*/ `
        <section>
            <button>Format</button>
            <button>Sjanger</button>
            <button>Plateselskap</button>
        </section>
        `
        html = checkbox + buttons
        return html
    } else {
        return ''
    }
}

function generateProductHome(){
    let list = []
    let search = model.viewState.homePage.search
    let category = model.viewState.homePage.category
    if (search === null) return ''
    if (search !== null){
        if (category === 'alt') list = searchAll()
        else if (category !== 'alt' && category !== null) list = searchCategories()
    }

    return generateProductList(list)
}

function generateProductList(list) {
    let html = ''
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

    return html
}