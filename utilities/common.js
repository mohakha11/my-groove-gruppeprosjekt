function changePage(page) {
  model.app.currentPage = page;
  updateView();
}

function searchProductHome(search) {
  model.viewState.homePage.search = search;
  generateProductHome();
  updateView();
}

function findLoggedInUser() {
  const currentUser = model.app.loggedInUserId;
  const users = model.usersProfile;
  for (let i of users) {
    if (i.userID === currentUser) return i;
    else return "";
  }
}

function testProduct() {
  // const titleCD = {
  //   id: "x",
  //   title: "",
  //   img: "img/cover_title.png",
  //   formatID: "CD", //placeholder
  //   artist: "test",
  //   year: 1000,
  //   label: "test",
  //   price: 1000,
  //   amount: 1000,
  //   updated: "00.00.0000",
  // };

  // VINYL
  const sabbathbloodyVinyl = {
    id: 1,
    title: "Sabbath Bloody Sabbath",
    img: "img/cover_sabbathbloodysabbath.jpg",
    formatID: "Vinyl", //placeholder
    artist: "Black Sabbath",
    year: 1973,
    label: "Vertigo",
    price: 299,
    amount: 300,
    updated: "04.11.2026",
  };

  const darksideofthemoonVinyl = {
    id: 2,
    title: "Sabbath Bloody Sabbath",
    img: "img/cover_darksideofthemoon.png",
    formatID: "Vinyl", //placeholder
    artist: "Pink Floyd",
    year: 1973,
    label: "Harvest",
    price: 399,
    amount: 400,
    updated: "04.11.2026",
  };

  const neverlovedelvisVinyl = {
    id: 3,
    title: "Never Loved Elvis",
    img: "img/cover_neverlovedelvis.jpg",
    formatID: "Vinyl", //placeholder
    artist: "The Wonder Stuff",
    year: 1991,
    label: "Polydor",
    price: 299,
    amount: 200,
    updated: "04.11.2026",
  };

  const dolittleVinyl = {
    id: 4,
    title: "Dolittle",
    img: "img/cover_doolittle.jpg",
    formatID: "Vinyl", //placeholder
    artist: "Pixies",
    year: 1989,
    label: "4AD",
    price: 399,
    amount: 250,
    updated: "04.11.2026",
  };

  const somewhereintimeVinyl = {
    id: 5,
    title: "Somewhere in Time",
    img: "img/cover_somewhereintime.jpg",
    formatID: "Vinyl", //placeholder
    artist: "Iron Maiden",
    year: 1986,
    label: "EMI",
    price: 399,
    amount: 350,
    updated: "04.11.2026",
  };

  const vinfrakjøkkenglassVinyl = {
    id: 6,
    title: "Vin fra kjøkkenglass",
    img: "img/cover_vinfrakjøkkenglass.png",
    formatID: "Vinyl", //placeholder
    artist: "HinterHagen",
    year: 2023,
    label: "ikkebarejattemed",
    price: 599,
    amount: 450,
    updated: "04.11.2026",
  };

  const electricladylandVinyl = {
    id: "7",
    title: "Electric Ladyland",
    img: "img/cover_electricladyland.webp",
    formatID: "Vinyl", //placeholder
    artist: "Jimmy Hendrix",
    year: 1968,
    label: "Polydor",
    price: 699,
    amount: 160,
    updated: "04.11.2026",
  };

  model.productsData.push(sabbathbloodyVinyl);
  model.productsData.push(darksideofthemoonVinyl);
  model.productsData.push(neverlovedelvisVinyl);
  model.productsData.push(dolittleVinyl);
  model.productsData.push(somewhereintimeVinyl);
  model.productsData.push(vinfrakjøkkenglassVinyl);
  model.productsData.push(electricladylandVinyl);

  //   model.productsData.push(titleVinyl);
  //   model.productsData.push(titleVinyl);
  //   model.productsData.push(titleVinyl);
}
