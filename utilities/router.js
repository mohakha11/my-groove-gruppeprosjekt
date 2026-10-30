testProduct();
function updateView() {
  let loadedPage = "";
  if (model.app.currentPage === "landingPage") loadedPage = homePage();
  else if (model.app.currentPage === "productPage") loadedPage = productPage();
  else if (model.app.currentPage === "profilePage") loadedPage = profilePage();
  else if (model.app.currentPage === "cartPage") loadedPage = cartPage();
  else if (model.app.currentPage === "payPage") loadedPage = payPage();

  let header = /*HTML*/ `
        <header>
            <section>
                <div class="header">
                    <div onclick="changePage('contactPage')">Kontakt oss</div>
                    <img onclick="changePage('landingPage')" src="https://mygroove.no/wp-content/uploads/myGroove-logo-1.png.webp"
                    alt="Logo her">
                    <abbr title="Profil"><img src="img/placeholder-profile.png" 
                    alt="Profilbilde"
                    id="profileBtn"
                    onclick="changePage('profilePage')"
                    ></abbr>
                    <img onclick="changePage('cartPage')" src="img/placeholder_cart.png" alt="Handlekurv">
                </div>
                <div>
                    <!-- <button onclick="changePage('landingPage')">HomePage</button> -->
                     <button onclick="changePage('productPage')">Product Page Dev placeholder</button>
                    <!-- <button onclick="changePage('profilePage')">Profile Page</button> -->
                    <!-- <button onclick="changePage('cartPage')">Handlekurv</button> -->
                    <button onclick="changePage('payPage')">Betaling Dev placeholder</button>
                </div>
            </section>
        </header>
    `;
  let html = header + loadedPage;

  document.getElementById("app").innerHTML = html;
}
