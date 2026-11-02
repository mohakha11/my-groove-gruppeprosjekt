function sendContactForm(event) {
    event.preventDefault();
    const responseDiv = document.getElementById('contactResponse');
    if (responseDiv) {
        responseDiv.innerHTML = '<p style="color: green; font-weight: bold; margin-top: 15px;">Takk for din melding! Vi svarer så fort vi kan.</p>';
    }

    document.getElementById('contactForm').reset();
}