function scrollToForm() {
    const formSection = document.getElementById('contact-form');
    formSection.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('name').focus();
}

function scrollToFormWithStory() {
    const formSection = document.getElementById('contact-form');
    const messageField = document.getElementById('message');
    messageField.value = "I’d like to submit a story about [Botswana culture/history/conservation]...";
    formSection.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('name').focus();
}

document.getElementById('submit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorDiv = document.getElementById('form-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    errorDiv.textContent = '';

    if (!name || !email || !message) {
        errorDiv.textContent = 'Please fill out all fields.';
        return;
    }

    if (!emailRegex.test(email)) {
        errorDiv.textContent = 'Please enter a valid email address.';
        return;
    }

    // Placeholder for email sending logic (e.g., using EmailJS or server-side API)
    // Example with EmailJS (requires setup with EmailJS account):
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'fcse23-018@thuto.bac.ac.bw'
    }).then(
        function(response) {
            alert('Message sent successfully!');
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        },
        function(error) {
            errorDiv.textContent = 'Failed to send message. Please try again.';
        }
    );
    */

    // For demonstration, simulate successful submission
    alert('Message sent successfully to fcse23-018@thuto.bac.ac.bw!');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});