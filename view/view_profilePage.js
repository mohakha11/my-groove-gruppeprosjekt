function profilePage() {
  let html = /*HTML*/ `
  <div class="profile-page">
    <section class="profile-main-section"> 
        <div class="profile-info-box"> 

          <h2 class="profile-info-box h2">Brukernavn</h2> <!-- må ha template literal -->
        
          <div class="profile-img-container">
            <img onclick="changeProfilePic()" src="img/placeholder-profile.png" alt="Profil bilde"> <!-- Klikkbar for å endre profilbilde. Standard valg og evt. opplast. -->
          </div>
          <div class="profile-text-details">
            <p>Rolle</p> <!-- må ha template literal -->
            <p>påloggstatus</p> <!-- må ha template literal -->
            <p>med siden: </p> <!-- må ha template literal -->
            <p>sist online: </p> <!-- må ha template literal -->
          </div>
          <button onclick="editProfile()">Rediger profil</button> <!--Åpner instillingside med kundepreferanser-->
        </div>
    </section> 

    
    <section class="profile-carousel-section"> <!--Midlertidig for visuell ref> --> <!--Ved klikk av favknapp på product page:
     Må hente inn data og legge inn albumbilde, tittel. Klikkbar til productpage for gjeldende produkt. Utgangspunktet tom til man legger til favoritter.-->
        <div class="carousel-container">
          <h3>favoritter</h3>
          <div class="carousel-row">
            <button>&gt;</button>
          <div class="carousel-images">
            <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
            <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
            <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
            <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
          <button>&gt;</button>
        </div>  

    
         <!--       <div>
          <h3>Samling</h3>
            <button>&gt;</button>
          <div>
            <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
            <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
            <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
            <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
            </div>
          <button>&gt;</button>

        </div>  -->
    
    </section>
         
        
   
         
         `;

  return html;
}
