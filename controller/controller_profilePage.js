function goToEdit() {
    model.app.currentPage = 'edit';
    updateView()
}

function exitEditProfile(action) {
    const currentUser = model.app.loggedInUserId
    const users = model.usersProfile
    if (action === 'save') {
        model.app.currentPage = 'profilePage';
        for (let i = 0; i < users.length; i++) {
        if (users[i].userID === currentUser) model.usersProfile[i].userName = model.viewState.profilePage.userName
        }
    } if (action === 'quit') model.app.currentPage = 'profilePage';
    updateView()
}

function delCollectionItem(index, type){
    console.log(index)
    const currentUser = findLoggedInUser()
    if (type === 'fav') currentUser.favorites.splice(index, 1)
    if (type === 'collect') currentUser.collection.splice(index, 1)
    console.log(currentUser.collection)

    updateView()
}


//Hva må vi gjøre?
/*
Vi må finne riktig bruker 
Også må vi gå inn i favorites eller collection.
Inni der splicer vi lista
For å splice må vi ha indexen til produketet


*/