function productPage(){
    
    let html = /*HTML*/`
        <div>
            <img src="productImage.jpg">
            <div>★★★★☆</div>
            <button>Kommentarer</button>
        </div>

        <div>
            <h3></h3>
            <h3>Albumstittel XX Edition</h3>
            <p>1979</p>
            <p>Labelnavn</p>
            <p>Vinyl 12”</p>

            <button onclick="addToCart()">Legg til handlekurv</button>
        </div>

        <div>
            <p> 299,-</p>
            <p>□ På lager</p>
        </div>

        <div>
            <img src="profileImage">
            <input placeholder="legg til kommentar">
        </div>
        
        <div>
            <img src="profileImage">
            <p>brukernavn</p>
            <p>1.12.2020 ★★★★☆</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
            <img src="profileImage">
            <p>brukernavn2</p>
            <p>2.12.2020 ★★★☆☆</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
            <img src="profileImage">
            <p>brukernavn3</p>
            <p>3.12.2020 ★★☆☆☆</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

    
    `;

    return html
}

