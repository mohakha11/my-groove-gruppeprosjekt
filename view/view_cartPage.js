function cartPage(){
    let html = /*HTML*/`
        <h1>Handlekurv</h1>
        <div id="handle">
            <section>
                <h2>Oppsummering</h2>
                <div>${showProductsCart()}</div>
            </section>

            <section>
                <h2>Betalingsmetode</h2>
                <p>Eksempel: Bestilling kan hentes i butikk opp til en uke etter betaling.</p>
                <br>
                <p>Subtotal: 750kr</p>
                <p>Medlemsrabatt: - 80kr</p>
                <p>Mva: 50kr</p>
                <br>
                <p><u>Total: 720kr</u></p>

                <section>
                    <button>Kort</button>
                    <button>Vipps</button>
                <section>
                <button>Fullført Betaling</button>
            </section>
        </div>
    `

    return html
}


function showProductsCart(){
    let html = /*HTML*/ `
        <img class="previewimg"
            Produkt 1
            Antall: 1
            250kr
    
    `
    return html

}