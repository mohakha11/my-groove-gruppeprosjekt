
let currentView = 'profile';
let userName = "brukernavn";

function goToEdit() {
    currentView = 'edit';
    updateView(); 
}                       // begge de her funksjonene er for å bytte mellom sidene

function saveProfile() {
    currentView = 'profile';
    updateView(); 
}