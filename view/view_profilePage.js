function profilePage() {
    // 1. Hvis vi har trykket "Rediger", vises bare denne reine siden:
    if (currentView === 'edit') {
        return /*HTML*/ `
        <div class="profile-page">
        <div>
            <button  onclick="saveProfile()">Tilbake</button>
            <button  onclick="saveProfile()">Lagre</button>
            <div class="profile-info-box">
                <h3>Endre brukernavn</h3>
                <input type="text" value="${userName}" oninput="userName = this.value">
                
            </div>
        </div>
        `;
    }

    
    let html = /*HTML*/`
    <div class="profile-page">
        <section class="profile-main-section"> 
            <div class="profile-info-box"> 
              <h2 class="profile-info-box h2">${userName}</h2>
            
              <div class="profile-img-container">
                <img onclick="changeProfilePic()" src="img/placeholder-profile.png" alt="Profil bilde">
              </div>
              <div class="profile-text-details">
                <p>Rolle</p>
                <p>påloggstatus</p>
                <p>med siden: </p>
                <p>sist online: </p>
              </div>

              <button onclick="goToEdit()">Rediger profil</button>
            </div>
        </section> 

        <section class="profile-carousel-section">
            <div class="carousel-container">
                <h3>favoritter</h3>
                <div class="carousel-row">
                    <button>&gt;</button>
                    <div class="carousel-images">
                        <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
                        <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
                        <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
                        <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
                    </div>
                    <button>&gt;</button>
                </div>
            </div>

            <div class="carousel-container">
                <h3>Samling</h3>
                <div class="carousel-row">
                    <button>&gt;</button>
                    <div class="carousel-images">
                        <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
                        <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
                        <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
                    </div>
                    <button>&gt;</button>
                </div>
            </div>
        </section>
    </div>
    `;

    return html;
}
