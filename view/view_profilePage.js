function profilePage(){
    let html = /*HTML*/`
    <div> 
          <div> 

          <h2>Brukernavn</h2>
        
          <div> 
          <div>profilebilde</div>
          </div>
        <div> 
           <p>Bidragsyter</p>
           <p>pålogget</p>
           <p>med siden: 2023-10-01</p>
           <p>sist online: 2 timer siden</p>
        </div>
            <button onclick="editProfile()">Rediger profil</button>
            </div>

         
    <div> 
        <div> 
            
          <h3>nylig lagt til</h3>
            <button>&gt;</button>
           <div>
              <div>Bilde</div>
              <div>Bilde</div>
              <div>Bilde</div>
              <button>&gt;</button>
            </div>
        </div>

    <div> 
        
          <h3>favoritter</h3>
            <button>&gt;</button>
           <div>
              <div>Bilde</div>
              <div>Bilde</div>
              <div>Bilde</div>
              <button>&gt;</button>
            </div>
        </div>
          <div> 
        
          <h3>samling</h3>
            <button>&gt;</button>
           <div>
              <div>Bilde</div>
              <div>Bilde</div>
              <div>Bilde</div>
              <button>&gt;</button>
            </div>
        </div>
         
        
   
         
         `

    return html
}