function contactPage() {
    return /*HTML*/ `
        <section id="contactSection">
            <form id="contactForm" onsubmit="sendContactForm(event)">
                <label for="name">Navn:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">E-post:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Melding:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
            <div id="contactResponse"></div>
        </section>
    `;
}

