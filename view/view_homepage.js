
function homePage(){
    let html = /*HTML*/ `
        <section id="category">
            <div>Vinyl</div>
            <div>CD</div>
            <div>Kassett</div>
            <div>Nyheter</div>
        </section> 
        <section>
            <button onclick="showFilterLanding()">
            Avansert søk</button>
            <input placeholder="Søk"
            onchange="searchProductHome(this.value)"
            >
        </section>
        <div>${filterButton()}</div>
        <div id="searchResult">${generateProductHome()}</div>
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
    const search = model.viewState.homePage.search
    let list = model.viewState.homePage.searchResult
    if (search === null) return ''
    if (search !== null){
        model.viewState.homePage.searchResult = model.productsData.filter(item => 
            item.label.toLowerCase().includes(search.toLowerCase()) ||
            item.artist.toLowerCase().includes(search.toLowerCase()) ||
            item.title.toLowerCase().includes(search.toLowerCase())
        )
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