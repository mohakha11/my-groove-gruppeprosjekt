function changePage(page){
    model.app.currentPage = page
    updateView()
}

function testProduct(){
    const geirVinyl= {
        id: 2,
            title: 'Nøkkelkompetanse',
            img: 'img/placeholder.jpg',
            formatID: 1,
            artist: 'Geir Sollid',
            year: 1998,
            label: 'GET Academy',
            price: 25000,
            amount: 250,
            updated: '16.10.2026',
    }
    const beckaKassett= {
        id: 3,
            title: 'ForLoop',
            img: null,
            formatID: 2,
            artist: 'Becka Baguett',
            year: 2020,
            label: 'GET Academy',
            price: 25500,
            amount: 300,
            updated: '30.10.2026',
    }
    const terjeCD= {
        id: 4,
            title: 'ChatGPT',
            img: null,
            formatID: 3,
            artist: 'TerjeGPT',
            year: 2026,
            label: 'GET Academy',
            price: 2026,
            amount: 2026,
            updated: '20.26.2026',
    }

    model.productsData.push(geirVinyl)
    model.productsData.push(beckaKassett)
    model.productsData.push(terjeCD)

}