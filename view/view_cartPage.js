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
    let html = ''
    let cart = model.viewState.cart

    if (cart.length < 1) html = /*HTML*/ `<div>Handlekurven er tom</div>`
    else {
        for (let cartItem = 0; cartItem < cart.length; cartItem ++) {
            for (let product of model.productsData){
                if (cart[cartItem].productID === product.id){
                    html += /*HTML*/ ` 
                    <section class="cartItem">
                        <img class="previewimg" 
                        src="${product.img}">

                        <div>
                            <div>${product.title}, ${model.productsData[0].artist}</div>
                            <div>${product.label}</div>
                            <div>${product.year}</div>
                            <div>Antall: ${cart[cartItem].amount}</div>
                            <section>
                                <div>${product.price} kr.
                                <button
                                onclick="removeCartItem(${product})"
                                >Fjern</button></div>
                            </section>
                        </div>
                    </section>`
                }}}
    }
    return html
}

function payPage(){
    let html = /*HTML*/ `
    <button>Tilbake</button>
    <div id="pay-container">
        <section>
            <h3>Kundeinformasjon</h3>

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
        </section>

        <section>
            <h3>Åpningstider</h3>
            <p>man-fre: 08:00-16:00</p>
            <p>lør:     09:00-15:00</p>
            <p>søn:     stengt</p>
            <br>
            <p>Bestillingsdato: Eksempel</p>
            <p>Hentes senest: Eksempel</p>
            <br>
            <p>Du vil bli sendt en sms og e-post 
            når bestillingen din er klar til henting</p>
        </section>

        <section>
            <h3>Velg betalingsmetode</h3>
        </section>
    
    </div>
    `

    return html
}