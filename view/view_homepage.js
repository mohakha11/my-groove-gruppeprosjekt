
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
        <div>${generateProductHome()}</div>
    `
    return html
}

function filterButton(){
    const filter = model.viewState.homePage.advanced
    if (filter){
        let checkbox = /*HTML*/ `
        <section id="test">
            <input type="checkbox">Pris Lav
            <input type="checkbox">Pris Høy
            <input type="checkbox">Ny - Eldst
            <input type="checkbox">Eldst - Ny
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
    let html = '';
    let list = []
    if (search === null) return ''
    if (search !== null){
        list = model.productsData.filter(item => item.label.toLowerCase().includes(search.toLowerCase()))
        //list = model.productsData.filter(item => item.artist.toLowerCase().includes(search.toLowerCase()))
        //list = model.productsData.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        console.log(list)
    }

    for (let i = 0; i < list.length; i++){
        html += /*HTML*/ `
            <div>
                <img class="previewimg" 
                src="${list[i].img}"
                onclick="productPage(${list[i].id})">
                <div>${list[i].title}</div>
                <div>${list[i].artist}</div>
    
            </div>
            <br>
        `
    }
    return html
}