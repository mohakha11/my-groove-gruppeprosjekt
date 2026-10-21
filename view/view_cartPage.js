function cartPage(){
    let html = /*HTML*/`
        <h1>Handlekurv</h1>
        <div id="cart-container">
            <section class="cart">
                <h2>Oppsummering</h2>
                <div>${showProductsCart()}</div>
            </section>

            <section class="cart">
                <h2>Betalingsmetode</h2>
                <p>Eksempel: Bestilling kan hentes i butikk opp til en uke etter betaling.</p>
                <br>
                <p>Subtotal: 750kr</p>
                <p>Medlemsrabatt: - 80kr</p>
                <p>Mva: 50kr</p>
                <br>
                <p><u>Total: 720kr</u></p>

                <section>
                    <button class="payBtn">Kort</button>
                    <button class="payBtn">Vipps</button>
                <section>
                <button class="payBtn">Fullfør Betaling</button>
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
            <div>${model.productsData[0].price} kr.</div>
        </div>
    </section>
    
    `
    return html

}