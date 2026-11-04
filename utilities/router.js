testProduct();
function updateView() {
    let header = '';
  let loadedPage = "";
  if (model.app.currentPage === "landingPage") loadedPage = homePage();
  else if (model.app.currentPage === "productPage") loadedPage = productPage();
  else if (model.app.currentPage === "profilePage") loadedPage = profilePage();
  else if (model.app.currentPage === "edit") loadedPage = profilePageEdit();
  else if (model.app.currentPage === "cartPage") loadedPage = cartPage();
  else if (model.app.currentPage === "payPage") loadedPage = payPage();
  else if (model.app.currentPage === "contactPage") loadedPage = contactPage();

  else if (model.app.currentPage === "adminStprage") loadedPage = storagePageAdmin();

    if (model.app.loggedInUserId == 1){
        header = /*HTML*/ `
            <header>
                <section>
                    <div class="header">
                        <div onclick="changePage('contactPage')"
                        style="cursor: pointer">Kontakt oss</div>
                        <abbr title="Startside"><img onclick="changePage('landingPage')" src="img/headerlogo.webp"
                        alt="Logo her"
                        id="logo"></abbr>
                        <abbr title="Handlekurv"><img onclick="changePage('cartPage')" src="img/placeholder_cart.png" 
                        alt="Handlekurv"  id="cartBtn"></abbr>
                        <abbr class="profile-img-container" title="Profil"><img class="profile-img" src="img/placeholder-profile.png" 
                        alt="Profilbilde"
                        id="profileBtn"
                        style="cursor: pointer"
                        onclick="changePage('profilePage')"
                        ></abbr>
                    </div>
                </section>
            </header>
        `;
    } else if (model.app.loggedInUserId == 2) {
        header = /*HTML*/ `
            <header>
                <section class="header" style="padding: 40px">
                    <button class="admin-header-btn" style="background-color: #eb804f">Lagerbeholdning</button>
                    <button class="admin-header-btn">Ordre</button>
                    <button class="admin-header-btn">Ansatte</button>
                    <button class="admin-header-btn">Brukere</button>
                    
                    <section>
                        <p style="margin: 0px;">Du er logget inn som: </p>
                        <p style="margin: 0px;"><b>Ole Hagen</b></p>
                    </section>
                    <button>Logg ut</button>
                    </section>
            </header>
        `;
    }
  let html = header + loadedPage;

  document.getElementById("app").innerHTML = html;
}