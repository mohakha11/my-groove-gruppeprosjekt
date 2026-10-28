function profilePage() {
    if (currentView === 'edit') {
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









  let html = /*HTML*/ `
  <div class="profile-page">
    <section class="profile-main-section"> 
        <div class="profile-info-box"> 

         <h2 class="profile-info-box h2">${userName}</h2> <!-- må ha template literal -->
        
          <div class="profile-img-container">
            <img onclick="changeProfilePic()" src="img/placeholder-profile.png" alt="Profil bilde"> <!-- Klikkbar for å endre profilbilde. Standard valg og evt. opplast. -->
          </div>
          <div class="profile-text-details">
            <p>Rolle</p> <!-- må ha template literal -->
            <p>påloggstatus</p> <!-- må ha template literal -->
            <p>med siden: </p> <!-- må ha template literal -->
            <p>sist online: </p> <!-- må ha template literal -->
          </div>
          <button onclick="goToEdit()">Rediger profil</button> <!--Åpner instillingside med kundepreferanser-->
        </div>
    </section> 

    
    <section class="profile-carousel-section">
    <div class="carousel-container">
        <h3>favoritter</h3>
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
    </div>
</section>
         
        
   
         
         `;

  return html;
}
