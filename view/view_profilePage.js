function profilePageEdit_OG() {
    let user = findLoggedInUser()
    let html = /*HTML*/ `
    <div class="profile-edit-wrapper">
        <div class="profile-edit-main">
            <h2 class="profile-edit-main-h2">Endre brukernavn</h2>
            <input class="profile-edit-input" 
            value="${user.userName}" 
            oninput="model.viewState.profilePage.userName=this.value">
        </div>
        <div class="profile-edit-actions">
            <button class="profile-edit-btn-back" onclick="exitEditProfile('quit')">Tilbake</button>
            <button class="profile-edit-btn-save" onclick="exitEditProfile('save')">Lagre</button>
        </div>
    </div>
    `
    return html
}

function profilePage(){
  let user = findLoggedInUser()
  let html = /*HTML*/ `
  <div class="profile-page">

    <section class="profile-main-section"> 
        <div class="profile-info-box"> 
            <h2 class="profile-info-box h2">${user.userName}</h2>
            <div class="profile-img-container">
                <img src="img/placeholder-profile.png" alt="Profil bilde">
            </div>
            
          <div class="profile-text-details">
            <p>Rolle: ${user.userRole}</p>
            <p>Status: ${user.online}</p>
            <p>Med siden: ${user.registerDate}</p>
            <p>Sist online: ${user.lastOnline}</p>
          </div>

          <button onclick="goToEdit()">Rediger profil</button>
        </div>
    </section> 

    
    <section class="profile-carousel-section">
        <div class="carousel-container">
            <h3>Favoritter</h3>
            <div class="carousel-row">
            <button>&lt;</button>
                <div class="carousel-images">
                    <div>${getCollections('fav')}</div>
                </div>
            <button>&gt;</button>
            </div>
        </div>

        <div class="carousel-container">
            <h3>Samling</h3>
            <div class="carousel-row">
            <button>&lt;</button>
                <div class="carousel-images">
                    <div>${getCollections('collect')}</div>
                </div>
            <button>&gt;</button>
        </div>
    </section>
  </div>`

  return html;
}

function getCollections(type){
    const products = model.productsData
    const currentUser = findLoggedInUser()
    let images = ''
    switch (type) {
        case "fav":
            for (let product of products) {
                if (currentUser.favorites.includes(product.id)){
                    images += /*HTML*/ `
                    <img src="${product.img}"
                    class="collection-IMG"
                    onclick="goToProductPage(${product.id})">
                    `
                } else if (currentUser.favorites.length < 1){
                    return "Du har ikke lagt til noen favoritter enda"
                }
            }

        case "collect":
            for (let product of products) {
                if (currentUser.collection.includes(product.id)){
                    images += /*HTML*/ `
                    <img src="${product.img}"
                    class="collection-IMG"
                    onclick="goToProductPage(${product.id})">
                    `
                } else if (currentUser.collection.length < 1){
                    return "Du har ikke lagt til noe i samligen din enda"
                }
            }  
        return images
    }
}