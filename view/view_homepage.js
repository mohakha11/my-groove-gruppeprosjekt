
updateView()
function updateView(){
    let loadedPage = ''
    if (model.app.currentPage === "landingPage") loadedPage = homePage()
    else if (model.app.currentPage === "productPage") loadedPage = productPage()
    else if (model.app.currentPage === "profilePage") loadedPage = profilePage()
    else if (model.app.currentPage === "cartPage") loadedPage = cartPage()


    let header = /*HTML*/ `
        <header>
            <section>
                <div>Kontakt oss på epost
                <img src="https://mygroove.no/wp-content/uploads/myGroove-logo-1.png.webp"
                alt="Logo her">
                <img alt="Profilbilde">
                </div>

                <button onclick="changePage('landingPage')">HomePage</button>
                <button onclick="changePage('productPage')">Product Page</button>
                <button onclick="changePage('profilePage')">Profile Page</button>
                <button onclick="changePage('cartPage')">Handlekurv</button>
            </section>
        </header>
    `
    let html = header + loadedPage

    document.getElementById('app').innerHTML = html
}


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