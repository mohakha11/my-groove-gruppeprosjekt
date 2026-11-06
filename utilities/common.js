function changePage(page) {
  model.app.currentPage = page;
  window.scrollTo(0, 0);/*Mk*/
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
    imgframe: "img/cover_ramme_vinyl.webp",
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
    id: 7,
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

  const bluesbrothersVinyl = {
    id: 8,
    title: "The Blues Brothers: Original Soundtrack Recording",
    img: "img/cover_bluesbrothers.jpg",
    formatID: "Vinyl", //placeholder
    artist: "The Blues Brothers",
    year: 1960,
    label: "Atlantic",
    price: 599,
    amount: 180,
    updated: "04.11.2026",
  };

  const inthecourtofthecrimsonkingVinyl = {
    id: 9,
    title: "In the Court of the Crimson King",
    img: "img/cover_inthecourtofthecrimsonking.jpeg",
    formatID: "Vinyl", //placeholder
    artist: "King Crimson",
    year: 1969,
    label: "Island",
    price: 599,
    amount: 90,
    updated: "04.11.2026",
  };

  const paranoidVinyl = {
    id: 10,
    title: "Paranoid",
    img: "img/cover_paranoid.jpg",
    formatID: "Vinyl", //placeholder
    artist: "Black Sabbath",
    year: 1970,
    label: "Vertigo",
    price: 299,
    amount: 130,
    updated: "04.11.2026",
  };

  const blackalbumVinyl = {
    id: 11,
    title: "Metallica(The Black Album)",
    img: "img/cover_blackalbum.jpg",
    formatID: "Vinyl", //placeholder
    artist: "Metallica",
    year: 1991,
    label: "Elektra",
    price: 79,
    amount: 220,
    updated: "04.11.2026",
  };

  //kassett
  const sputnik1Kassett = {
    id: 20,
    title: "Sputnik 1",
    img: "img/cover_sputnik1.jpg",
    formatID: "Kassett", //placeholder
    artist: "Sputnik",
    year: 1986,
    label: "Busk",
    price: 19,
    amount: 40,
    updated: "04.11.2026",
  };

  const sputnik2Kassett = {
    id: 21,
    title: "Sputnik 2",
    img: "img/cover_sputnik2.jpg",
    formatID: "Kassett", //placeholder
    artist: "Sputnik",
    year: 1986,
    label: "Busk",
    price: 19,
    amount: 40,
    updated: "04.11.2026",
  };

  const sputnik3Kassett = {
    id: 23,
    title: "Sputnik 3",
    img: "img/cover_sputnik3.jpg",
    formatID: "Kassett", //placeholder
    artist: "Sputnik",
    year: 1987,
    label: "Busk",
    price: 19,
    amount: 30,
    updated: "04.11.2026",
  };

  const sputnik4Kassett = {
    id: 24,
    title: "Sputnik 4",
    img: "img/cover_sputnik4.jpg",
    formatID: "Kassett", //placeholder
    artist: "Sputnik",
    year: 1988,
    label: "Busk",
    price: 19,
    amount: 20,
    updated: "04.11.2026",
  };

  //CD
  const larsmonsenCD = {
    id: 30,
    title: "Canada på tvers: Musikken fra serien",
    img: "img/cover_larsmonsen.webp",
    formatID: "CD", //placeholder
    artist: "Lars Monsen",
    year: 2005,
    label: "NRK",
    price: 15,
    amount: 930,
    updated: "04.11.2026",
  };

  const sabbathbloodyCD = {
    id: 31,
    title: "Sabbath Bloody Sabbath",
    img: "img/cover_sabbathbloodysabbath.jpg",
    formatID: "CD", //placeholder
    artist: "Black Sabbath",
    year: 1987,
    label: "Vertigo",
    price: 99,
    amount: 30,
    updated: "04.11.2026",
  };

  const darksideofthemoonCD = {
    id: 32,
    title: "Sabbath Bloody Sabbath",
    img: "img/cover_darksideofthemoon.png",
    formatID: "CD", //placeholder
    artist: "Pink Floyd",
    year: 1986,
    label: "EMI",
    price: 89,
    amount: 40,
    updated: "04.11.2026",
  };

  const neverlovedelvisCD = {
    id: 33,
    title: "Never Loved Elvis",
    img: "img/cover_neverlovedelvis.jpg",
    formatID: "CD", //placeholder
    artist: "The Wonder Stuff",
    year: 1991,
    label: "Polydor",
    price: 99,
    amount: 98,
    updated: "04.11.2026",
  };

  const dolittleCD = {
    id: 34,
    title: "Dolittle",
    img: "img/cover_doolittle.jpg",
    formatID: "CD", //placeholder
    artist: "Pixies",
    year: 1989,
    label: "4AD",
    price: 99,
    amount: 110,
    updated: "04.11.2026",
  };

  const somewhereintimeCD = {
    id: 35,
    title: "Somewhere in Time",
    img: "img/cover_somewhereintime.jpg",
    formatID: "CD", //placeholder
    artist: "Iron Maiden",
    year: 1986,
    label: "EMI",
    price: 89,
    amount: 150,
    updated: "04.11.2026",
  };

  const vinfrakjøkkenglassCD = {
    id: 36,
    title: "Vin fra kjøkkenglass",
    img: "img/cover_vinfrakjøkkenglass.png",
    formatID: "CD", //placeholder
    artist: "HinterHagen",
    year: 2023,
    label: "ikkebarejattemed",
    price: 299,
    amount: 450,
    updated: "04.11.2026",
  };

  const electricladylandCD = {
    id: 37,
    title: "Electric Ladyland",
    img: "img/cover_electricladyland.webp",
    formatID: "CD", //placeholder
    artist: "Jimmy Hendrix",
    year: 1987,
    label: "Reprise",
    price: 129,
    amount: 91,
    updated: "04.11.2026",
  };

  const bluesbrothersCD = {
    id: 38,
    title: "The Blues Brothers: Original Soundtrack Recording",
    img: "img/cover_bluesbrothers.jpg",
    formatID: "CD", //placeholder
    artist: "The Blues Brothers",
    year: 1995,
    label: "Atlantic",
    price: 99,
    amount: 60,
    updated: "04.11.2026",
  };

  const inthecourtofthecrimsonkingCD = {
    id: 39,
    title: "In the Court of the Crimson King",
    img: "img/cover_inthecourtofthecrimsonking.jpeg",
    formatID: "CD", //placeholder
    artist: "King Crimson",
    year: 1987,
    label: "Island",
    price: 159,
    amount: 50,
    updated: "04.11.2026",
  };

  const paranoidCD = {
    id: 40,
    title: "Paranoid",
    img: "img/cover_paranoid.jpg",
    formatID: "CD", //placeholder
    artist: "Black Sabbath",
    year: 1991,
    label: "Castle",
    price: 99,
    amount: 30,
    updated: "04.11.2026",
  };

  const blackalbumCD = {
    id: 41,
    title: "Metallica(The Black Album)",
    img: "img/cover_blackalbum.jpg",
    formatID: "CD", //placeholder
    artist: "Metallica",
    year: 1991,
    label: "Elektra",
    price: 79,
    amount: 120,
    updated: "04.11.2026",
  };

  //vinyl
  model.productsData.push(sabbathbloodyVinyl);
  model.productsData.push(darksideofthemoonVinyl);
  model.productsData.push(neverlovedelvisVinyl);
  model.productsData.push(dolittleVinyl);
  model.productsData.push(somewhereintimeVinyl);
  model.productsData.push(vinfrakjøkkenglassVinyl);
  model.productsData.push(electricladylandVinyl);
  model.productsData.push(bluesbrothersVinyl);
  model.productsData.push(inthecourtofthecrimsonkingVinyl);
  model.productsData.push(paranoidVinyl);
  model.productsData.push(blackalbumVinyl);

  //kassett
  model.productsData.push(sputnik1Kassett);
  model.productsData.push(sputnik2Kassett);
  model.productsData.push(sputnik3Kassett);
  model.productsData.push(sputnik4Kassett);

  //cd
  model.productsData.push(larsmonsenCD);
  model.productsData.push(sabbathbloodyCD);
  model.productsData.push(darksideofthemoonCD);
  model.productsData.push(neverlovedelvisCD);
  model.productsData.push(dolittleCD);
  model.productsData.push(somewhereintimeCD);
  model.productsData.push(vinfrakjøkkenglassCD);
  model.productsData.push(electricladylandCD);
  model.productsData.push(bluesbrothersCD);
  model.productsData.push(inthecourtofthecrimsonkingCD);
  model.productsData.push(paranoidCD);

  model.productsData.push(blackalbumCD);
}
