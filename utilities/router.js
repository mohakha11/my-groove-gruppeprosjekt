testProduct()
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