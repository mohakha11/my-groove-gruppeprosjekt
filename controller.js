function changePage(page){
    model.app.currentPage = page
    updateView()
}


function showFilterLanding(){
    model.viewState.homePage.advanced = true
    updateView()
}