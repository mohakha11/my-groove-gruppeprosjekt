function changePage(page) {
  model.app.currentPage = page;
  updateView();
}

function searchProductHome(search) {
  model.viewState.homePage.search = search;
  generateProductHome();
  updateView();
}

function testProduct() {
  const geirVinyl = {
    id: 1,
    title: "Nøkkelkompetanse",
    img: "img/cover_nøkkelkompetanse.png",
    formatID: "Vinyl", //placeholder
    artist: "Geir Sollid",
    year: 2016,
    label: "GET Academy",
    price: 25000,
    amount: 250,
    updated: "16.10.2026",
  };
  const beckaKassett = {
    id: 2,
    title: "ForLoop",
    img: "img/cover_beckasbaguetter.png",
    formatID: "Kassett", //placeholder
    artist: "Becka Baguett",
    year: 2020,
    label: "GET Academy",
    price: 25500,
    amount: 300,
    updated: "30.10.2026",
  };
  const terjeCD = {
    id: 3,
    title: "ChatGPT",
    img: "img/cover_chatgpt.png",
    formatID: "CD", //placeholder
    artist: "TerjeGPT",
    year: 2026,
    label: "GET Academy",
    price: 2026,
    amount: 2026,
    updated: "20.26.2026",
  };

  model.productsData.push(geirVinyl);
  model.productsData.push(beckaKassett);
  model.productsData.push(terjeCD);
}
