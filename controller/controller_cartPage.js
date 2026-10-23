



const payButton = document.querySelector("payBtn");

payButton.addEventListener("click", ()=> {model.app.currentPage = 'payPage';
    updateView()
})