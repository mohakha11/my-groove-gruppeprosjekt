testProduct();
function updateView() {
  let header = "";
  let loadedPage = "";
  if (model.app.currentPage === "landingPage") loadedPage = homePage();
  else if (model.app.currentPage === "productPage") loadedPage = productPage();
  else if (model.app.currentPage === "profilePage") loadedPage = profilePage();
  else if (model.app.currentPage === "edit") loadedPage = profilePageEdit();
  else if (model.app.currentPage === "cartPage") loadedPage = cartPage();
  else if (model.app.currentPage === "payPage") loadedPage = payPage();
  else if (model.app.currentPage === "contactPage") loadedPage = contactPage();
  else if (model.app.currentPage === "adminStprage")
    loadedPage = storagePageAdmin();

  if (model.app.loggedInUserId == 1) {
    header = /*HTML*/ `
            <header>
                <section>
                    <div class="header">
                        <div onclick="changePage('contactPage')"
                        style="cursor: pointer">Kontakt oss</div>
                        <abbr title="Startside"><img onclick="changePage('landingPage')" src="img/headerlogo.webp"
                        alt="Logo her"
                        id="logo"></abbr>
                        <div style="position: relative; display: inline-block;">
                        <abbr title="Handlekurv">
                        <img onclick="changePage('cartPage')" src="img/placeholder_cart.png" alt="Handlekurv" id="cartBtn">
                        </abbr>
                        <div style="position: absolute; top: -5px; right: -8px; background: red; color: white; border-radius: 50%; padding: 2px 6px; font-size: 12px; font-weight: bold;">
                         ${model.viewState.cart.length}
                        </div>
                    </div>
                        <abbr class="profile-img-container-header" title="Profil"><img class="profile-img-header" src="img/placeholder-profile.png" 
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
                <section>
                    <div class="header">
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
  }
  let html = header + loadedPage;

  document.getElementById("app").innerHTML = html;
}
