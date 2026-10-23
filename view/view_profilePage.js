function profilePage() {
  let html = /*HTML*/ `
    <section> 
        <div> 

          <h2>Brukernavn</h2> <!-- må ha template literal -->
        
          <div> 
            <img onclick="changeProfilePic()" src="img/placeholder-profile.png" alt="Profil bilde"> <!-- Klikkbar for å endre profilbilde. Standard valg og evt. opplast. -->
          </div>
          <div> 
            <p>Bidragsyter</p> <!-- må ha template literal -->
            <p>pålogget</p> <!-- må ha template literal -->
            <p>med siden: 2023-10-01</p> <!-- må ha template literal -->
            <p>sist online: 2 timer siden</p> <!-- må ha template literal -->
          </div>
          <button onclick="editProfile()">Rediger profil</button>
        </div>
    </section> 

    
    <section> 
        <div>
          <h3>favoritter</h3>
            <button>&gt;</button>
          <div>
            <img class="collection-IMG" src="img/placeholder-product.png" alt="Produktbilde">
<!--            <img src="img/placeholder-product.png" alt="Produktbilde">
            <img src="img/placeholder-product.png" alt="Produktbilde"> -->
          </div>
          <button>&gt;</button>
        </div>  

        
         <!-- <div> 
        <h3>samling</h3>
            <button>&gt;</button>
          <div>
            <div>Bilde</div>
            <div>Bilde</div>
            <div>Bilde</div>
            <button>&gt;</button>
          </div>
        </div> -->

    </section>
         
        
   
         
         `;

  return html;
}
