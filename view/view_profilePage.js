function profilePage() {
  let user = findLoggedInUser();
  let html = /*HTML*/ `
  <div class="profile-page">

    <section class="profile-main-section"> 
        <div class="profile-info-box"> 
            <h2 class="profile-info-box h2">${user.userName}</h2>
            <div class="profile-img-container">
                <img class="profile-img" src="img/placeholder-profile.png" alt="Profil bilde">
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
                    <div>${getCollections("fav")}</div>
                </div>
            <button>&gt;</button>
            </div>
        </div>

        <div class="carousel-container">
            <h3>Samling</h3>
            <div class="carousel-row">
            <button>&lt;</button>
                <div class="carousel-images">
                    <div>${getCollections("collect")}</div>
                </div>
            <button>&gt;</button>
        </div>
    </section>
  </div>

  <button onclick="switchToAdmin()">Bytt til admin, Dev test</button>
  `;

  return html;
}

function getCollections(type) {
  const products = model.productsData;
  const currentUser = findLoggedInUser();
  let images = "";
  switch (type) {
    case "fav":
      if (currentUser.favorites.length < 1) {
        return "Du har ikke lagt til noen favoritter enda";
      }
      for (let product of products) {
        if (currentUser.favorites.includes(product.id)) {
          images += /*HTML*/ `
                    <img src="${product.img}"
                    class="collection-IMG"
                    onclick="goToProductPage(${product.id})">
                    `;
        }
      }
      break;

    case "collect":
      if (currentUser.collection.length < 1) {
        return "Du har ikke lagt til noe i samligen din enda";
      }
      for (let product of products) {
        if (currentUser.collection.includes(product.id)) {
          images += /*HTML*/ `
                    <img src="${product.img}"
                    class="collection-IMG"
                    onclick="goToProductPage(${product.id})">
                    `;
        }
      }
      break;
  }
  return images;
}
