function profilePage() {
  let html = /*HTML*/ `
    <section> 
        <div> 

          <h2>Brukernavn</h2> <!-- må ha template literal -->
        
          <div> 
            <img onclick="changeProfilePic()" src="img/placeholder-profile.png" alt="Profil bilde"> <!-- Klikkbar for å endre profilbilde. Standard valg og evt. opplast. -->
          </div>
          <div> 
            <p>Rolle</p> <!-- må ha template literal -->
            <p>påloggstatus</p> <!-- må ha template literal -->
            <p>med siden: </p> <!-- må ha template literal -->
            <p>sist online: </p> <!-- må ha template literal -->
          </div>
          <button onclick="editProfile()">Rediger profil</button>
        </div>
    </section> 

    
    <section> <!--Midlertidig for visuell ref> --> <!--Ved klikk av favknapp på product page:
     Må hente inn data og legge inn albumbilde, tittel. Klikkbar til productpage for gjeldende produkt-->
        <div>
          <h3>favoritter</h3>
            <button>&gt;</button>
          <div>
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
