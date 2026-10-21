
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
            <input placeholder="Søk">
        </section>
        <div>${filterButton()}</div>

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