


function cartPage(){
    
    let html = /*HTML*/`
    <button>Tilbake</button>
        <div id="cart-container">
            <section class="cart">
                <h2>Handlekurv</h2>
                <div>${showProductsCart()}</div>
            </section>

            <section class="cart">
                <h2>Oppsummering</h2>
                <p>Eksempel: Bestilling kan hentes i butikk opp til en uke etter betaling.</p>
                <br>
                <p>Subtotal: 750kr</p>
                <p>Medlemsrabatt: - 80kr</p>
                <p>Mva: 50kr</p>
                <p><u>Total: 720kr</u></p>

                <button id="payBtn"
                onclick="goToPayPage()">Gå til betaling</button>
            </section>
        </div>
    `

    return html
}



function showProductsCart(){
    let html = /*HTML*/ `
    <section class="cartItem">
        <img class="previewimg" 
        src="${model.productsData[0].img}">
        
        <div>
            <div>${model.productsData[0].title}, ${model.productsData[0].artist}</div>
            <div>${model.productsData[0].label}</div>
            <div>${model.productsData[0].year}</div>
            <div>Antall: 1</div>
            <section>
                <div>${model.productsData[0].price} kr.
                <button>Fjern</button></div>
            </section>
        </div>
    </section>
    
    `
    return html

}

function payPage(){
    let html = /*HTML*/ `
    <div id="pay-container">
        <button>Tilbake</button>

        <div>
            <p>Fornavn:</p>
            <input type="text">
        </div>
        <div>
            <p>Etternavn:</p>
            <input type="text">
        </div>
        <div>
            <p>Telefon nummer:</p>
            <input type="text">
        </div>
        <div>
            <p>E-post:</p>
            <input type="text">
        </div>



    `

    return html
}