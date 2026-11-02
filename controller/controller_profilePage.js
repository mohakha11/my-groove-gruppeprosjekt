function goToEdit() {
    model.app.currentPage = 'edit';
    updateView()
}                       // begge de her funksjonene er for å bytte mellom sidene

function exitEditProfile(action) {
    const currentUser = model.app.loggedInUserId
    const users = model.usersProfile
    if (action === 'save') {
        model.app.currentPage = 'profilePage';
        for (let i = 0; i < users.length; i++) {
        if (users[i].userID === currentUser) model.usersProfile[i].userName = model.viewState.profilePage.userName
        }
    }
    if (action === 'quit') {
        model.app.currentPage = 'profilePage';
    }
    updateView()
}


function findLoggedInUser(){
    const currentUser = model.app.loggedInUserId
    const users = model.usersProfile
    for (let i of users) {
        if (i.userID === currentUser) return i
        else return ''
    }

}
