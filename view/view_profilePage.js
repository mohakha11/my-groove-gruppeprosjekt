function profilePageEdit() {
    const userName = model.usersProfile[0].userName
    return /*HTML*/ `
    <div class="profile-edit-wrapper">
        <div class="profile-edit-main">
            <h2 class="profile-edit-main-h2">Endre brukernavn</h2>
            <input class="profile-edit-input" type="text" value="${userName}" oninput="userName = this.value">
        </div>
        <div class="profile-edit-actions">
            <button class="profile-edit-btn-back" onclick="saveProfile()">Tilbake</button>
            <button class="profile-edit-btn-save" onclick="saveProfile()">Lagre</button>
        </div>
    </div>
    `;
}

function profilePage(){
  let user = findLoggedInUser()
  
  let html = /*HTML*/ `
  <div class="profile-page">

    <section class="profile-main-section"> 
        <div class="profile-info-box"> 
            <h2 class="profile-info-box h2">${user.userName}</h2>
            <div class="profile-img-container">
                <img onclick="changeProfilePic()" src="img/placeholder-profile.png" alt="Profil bilde"> <!-- Klikkbar for å endre profilbilde. Standard valg og evt. opplast. -->
            </div>
            
          <div class="profile-text-details">
            <p>Rolle: ${user.userRole}</p> <!-- må ha template literal -->
            <p>Status: ${user.online}</p> <!-- må ha template literal -->
            <p>Med siden: ${user.registerDate}</p> <!-- må ha template literal -->
            <p>Sist online: ${user.lastOnline}</p> <!-- må ha template literal -->
          </div>

          <button onclick="goToEdit()">Rediger profil</button> <!--Åpner instillingside med kundepreferanser-->
        </div>
    </section> 

    
    <section class="profile-carousel-section">
        <div class="carousel-container">
            <h3>Favoritter</h3>
            <div class="carousel-row">
            <button>&lt;</button>
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
            <button>&lt;</button>
                <div class="carousel-images">
                    <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
                    <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
                    <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
                </div>
            <button>&gt;</button>
        </div>
    </section>
  </div>`

  return html;
}
