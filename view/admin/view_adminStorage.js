function storagePageAdmin(){
    let html = '';
        html = /*HTML*/`
        <section id="storage-nav">
            <button>Filter</button>
            <input placeholder="Søk" style="width: 400px;">
            <button style="margin-left: auto;"
            onclick="goToAddNewProduct()">Registrer ny vare</button>
        </section>

        <div>
            <table>
                <tr>
                    <th>Produkt</th>
                    <th>Format</th>
                    <th>Antall</th>
                    <th>Pris</th>
                    <th>Lagerstatus</th>
                    <th>Sist Oppdatert</th>
                    <th>Handling</th>
                </tr>
                ${getProductsStorage()}
            </table>
        
        </div>
    
        `
    return html
}


function getProductsStorage(){
    let tableItem = '';

    for(item of model.productsData) {
        tableItem += /*HTML*/ `
            <tr>
                <td>
                    <img style="height: 50px; width: 50px;" src="${item.img}">
                    ${item.title}
                </td>
                <td>${item.formatID}</td>
                <td>${item.amount}</td>
                <td>${item.price} kr</td>
                <td>På lager</td>
                <td>${item.updated}</td>
                <td>
                    <button>Rediger</button>
                    <button>Slett</button>
                </td>
            </tr>
        `
    }

    //obs, item er hele objektet!


    return tableItem

}

function addNewProduct(){
    let html = /*HTML*/`
        <button onclick="changePage('adminStorage')">Tilbake</button>

        <div id="new-product-container">
            <section id="new-product-img">
                <img src="img/placeholder-product.png">
            </section>
            
            <section id="new-product-desc">
                <p><b>Albumtittel</b></p>
                <input>
                    <section>
                        <p><b>Format</b></p>
                        <input>
                        <p><b>Utgivelsesår</b></p>
                        <input>
                    </section>

                    <section>
                        <p><b>Artist</b></p>
                        <input>
                        <p><b>Label</b></p>
                        <input>
                    </section>

                    <section>
                        <p><b>Pris</b></p>
                        <input>
                        <p><b>Antall</b></p>
                        <input>
                    </section>
            </section>
        </div>
    
    ` 
    return html
}