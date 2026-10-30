function setProfilePage(){
    if (model.app.currentPage === 'profile') profilePage()
    if (model.app.currentPage === 'edit') profilePageEdit()
}

function goToEdit() {
    model.app.currentPage = 'edit';
    updateView(); 
}                       // begge de her funksjonene er for å bytte mellom sidene

function saveProfile() {
    model.app.currentPage = 'profile';
    updateView(); 
}


function findLoggedInUser(){
    const currentUser = model.app.loggedInUserId
    const users = model.usersProfile
    for (let i of users) {
        if (i.userID === currentUser) return i
        else return ''
    }

}