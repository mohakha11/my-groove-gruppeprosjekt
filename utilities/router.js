testProduct();
function updateView() {
  let loadedPage = "";
  if (model.app.currentPage === "landingPage") loadedPage = homePage();
  else if (model.app.currentPage === "productPage") loadedPage = productPage();
  else if (model.app.currentPage === "profilePage") loadedPage = profilePage();
  else if (model.app.currentPage === 'edit') loadedPage = profilePageEdit();
  else if (model.app.currentPage === "cartPage") loadedPage = cartPage();
  else if (model.app.currentPage === "payPage") loadedPage = payPage();

  let header = /*HTML*/ `
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
                    <abbr title="Profil"><img src="img/placeholder-profile.png" 
                    alt="Profilbilde"
                    id="profileBtn"
                    style="cursor: pointer"
                    onclick="changePage('profilePage')"
                    ></abbr>
                </div>
            </section>
        </header>
    `;
  let html = header + loadedPage;

  document.getElementById("app").innerHTML = html;
}
