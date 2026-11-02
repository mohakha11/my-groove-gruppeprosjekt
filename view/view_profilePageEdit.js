function profilePageEdit(){
  let user = findLoggedInUser()
  let html = /*HTML*/ `
  <h1>Rediger Profil</h1>
  <div class="profile-page">

    <section class="profile-main-section"> 
        <div class="profile-info-box"> 
            <input class="profile-edit-input" 
            value="${user.userName}" 
            oninput="model.viewState.profilePage.userName=this.value">
            <div class="profile-img-container">
                <img src="img/placeholder-profile.png" alt="Profil bilde">
            </div>
            
          <div class="profile-text-details">
            <p>Rolle: ${user.userRole}</p>
            <p>Status: ${user.online}</p>
            <p>Med siden: ${user.registerDate}</p>
            <p>Sist online: ${user.lastOnline}</p>
          </div>

          <div class="profile-edit-actions">
            <button class="profile-edit-btn-back" onclick="exitEditProfile('quit')">Tilbake</button>
            <button class="profile-edit-btn-save" onclick="exitEditProfile('save')">Lagre</button>
        </div>
        </div>
    </section> 

    
    <section class="profile-carousel-section">
        <div class="carousel-container">
            <h3>Favoritter</h3>
            <div class="carousel-row">
            <button>&lt;</button>
                <div class="carousel-images">
                    <div>${delCollections('fav')}</div>
                </div>
            <button>&gt;</button>
            </div>
        </div>

        <div class="carousel-container">
            <h3>Samling</h3>
            <div class="carousel-row">
            <button>&lt;</button>
                <div class="carousel-images">
                    <div>${delCollections('collect')}</div>
                </div>
            <button>&gt;</button>
        </div>
        <p>Trykk på et element for å fjerne det</p>
    </section>
  </div>`

  return html;
}


function delCollections(type){
    const products = model.productsData
    const currentUser = findLoggedInUser()
    let images = ''
    switch (type) {
        case "fav":
            for (let product of products) {
                if (currentUser.favorites.includes(product.id)){
                    images += /*HTML*/ `
                    <img src="${product.img}"
                    class="collection-IMG-del"
                    onclick="goToProductPage(${products.indexOf(product)}, 'fav')">
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
                    class="collection-IMG-del"
                    onclick="delCollectionItem(${products.indexOf(product)}, 'collect')">
                    `
                } else if (currentUser.collection.length < 1){
                    return "Du har ikke lagt til noe i samligen din enda"
                }
        }
        return images
    }
}