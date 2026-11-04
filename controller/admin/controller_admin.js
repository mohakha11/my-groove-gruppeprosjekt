function switchToAdmin(){
    model.app.currentPage = 'adminStorage';
    model.app.loggedInUserId = 2;
    updateView()
}

function switchToUser(){
    model.app.currentPage = 'landingPage';
    model.app.loggedInUserId = 1;
    updateView()
}

function goToAddNewProduct(){
    model.app.currentPage = 'addProductPage';
    updateView()
}