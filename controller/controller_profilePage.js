function goToEdit() {
    model.app.currentPage = 'edit';
    updateView()
}

function exitEditProfile(action) {
    const currentUser = model.app.loggedInUserId
    const users = model.usersProfile
    if (action == 'save') {
        model.app.currentPage = 'profilePage';
        for (let i = 0; i < users.length; i++) {
        if (users[i].userID === currentUser) model.usersProfile[i].userName = model.viewState.profilePage.userName
        }
    } if (action === 'quit') model.app.currentPage = 'profilePage';
    updateView()
}

function delCollectionItem(productID, type){
    const currentUser = findLoggedInUser()
    if (type == 'fav') {
        let index = currentUser.favorites.indexOf(productID)
        currentUser.favorites.splice(index, 1)
    }

    if (type == 'collect') {
        let index = currentUser.collection.indexOf(productID)
        currentUser.collection.splice(index, 1)
    }

    updateView()
}

