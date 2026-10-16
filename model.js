const model = {
    app: {
        currentPage: "landingPage",
        loggedInUserId: null, //Bruker er ikke innlogget
    },
    viewState: {
        homePage: {
            category: null, //VINYL CD KASSETT NYHETER
            search: null,
        },
        advancedSearch: {
            advancedFilterID: [1, 3, 5, 7, 10],
        },
        productPage: {
            selectedAmount: null,
        },
        orderPage: {
            customer: {
                firstName: null,
                lastName: null,
                phoneNumber: null
            },
            paymentMethod: null
        },
        userReview: {
            stars: null,
            comment: "",
        },
        adminStorage: {
            search: null,
            filter: {
                format: null,
                storageAmount: null,
                lastUpdated: null
            },
            addItem: {
                title: null,
                img: null,
                format: null,
                artist: null,
                year: null,
                label: null,
                price: null,
                amount: null
            },
            orderHistory: {
                search: null,
                storageFilterID: null,
                date: null
            },
            employees: {
                search: null,
                addEmployee: {
                    firstName: null,
                    lastName: null,
                    email: null,
                    role: null
                },
                users: {
                    search: null
                },
            },
        },
        cart: [{productID: null, amount: null},],
    },
    
    format: [
        { name: "vinyl", id: 1},
        { name: "kassett", id: 2},
        { name: "cd", id: 3},
    ],
    productsData: [
        {
            id: 1,
            title: 'Album',
            img: null,
            formatID: 1,
            artist: 'ABBA',
            year: 1998,
            label: null,
            price: 250,
            amount: null,
            updated: '16.10.2026',
        },
    ],
    reviews: [
        {
            productID: 1,
            userID: 1,
            comment: "Fet skive",
            stars: 4,
            timestamp: "",
        }
    ],
    orders: [
        {
            id: 1,
            orderCode: 'NK425',
            dateTime: {
                date: '16.10.2026',
                time: '10:30'
            },
            customer: {
                firstName: 'Geir',
                lastName: 'Sollid',
                phoneNumber: '12345678'
            },
            paymentMethod: 'vipps',
            products: [
                {productID: 1, amount: 1},
                {productID: 2, amount: 7},
                {productID: 3, amount: 2},
            ],
            status: [1],
            totalPrice: 720,
        },
    ],
    usersProfile: [
        {
            userID: 1,
            img: '',
            userName: 'GeirS',
            email: 'geirsollid@getacademy.no',
            firstName: 'Geir',
            lastName: 'Sollid',
            userRole: 3,
            online: false,
            registerDate: '10.10.2026',
            lastOnline: '16.10.2026',
            contributions: 42,
            recent: [1, 3, 5], //ID til produkter i butikk
            favorites: [2, 3],
            collection: [1, 2, 3, 4, 5],
            formatPref: null, //kunde sin format preferanse.
        },
    ],

    orderStatus: [
        {name: "Fullført", id: 1},
        {name: "Venter", id: 2},
        {name: "Kansellert", id: 3},
    ],
    storageFilter: [
        {name: 'Alle ordre', id: 1},
        {name: 'Fullførte ordre', id: 2},
        {name: 'Ventende ordre', id: 3},
        {name: 'Kansellerte ordre', id: 4},
    ],
    userRoles: [
        {name: "admin", id: 1},
        {name: "ansatt", id: 2},
        {name: "bidragsyter", id: 3},
        {name: "medlem", id: 4},
    ],
    advancedFilter: [
        {name: 'Nytt', id: 1},
        {name: 'Eldst', id: 2},
        {name: 'Pris lav', id: 3},
        {name: 'Pris høy', id: 4},
        {name: 'Vinyl', id: 5},
        {name: 'Kassett', id: 6},
        {name: 'CD', id: 7},
        {name: 'Rock', id: 8},
        {name: 'Pop', id: 9},
        {name: 'Elektro', id: 10},
        {name: 'Sony', id: 11},
        {name: 'Universal', id: 12},
        {name: 'Warner', id: 13},
    ],
}