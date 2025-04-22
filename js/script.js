/* Initialize EmailJS with your public key */
(function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

/* Scroll to contact form and focus on name field */
function scrollToForm() {
    const formSection = document.getElementById('contact-form');
    formSection.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('name').focus();
}

/* Scroll to contact form, pre-fill message, and focus on name field */
function scrollToFormWithStory() {
    const formSection = document.getElementById('contact-form');
    const messageField = document.getElementById('message');
    messageField.value = "I’d like to submit a story about [Botswana culture/history/conservation]...";
    formSection.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('name').focus();
}

/* Handle form submission for all forms with submit-btn */
document.querySelectorAll('#submit-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        // Get form fields
        const form = button.closest('form');
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();
        const errorDiv = form.querySelector('#form-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Clear previous messages
        errorDiv.textContent = '';
        let successDiv = form.querySelector('#form-success');
        if (successDiv) {
            successDiv.style.display = 'none';
        }

        // Validate inputs
        if (!name || !email || !message) {
            errorDiv.textContent = 'Please fill out all fields.';
            errorDiv.style.cssText = `
                color: #D32F2F;
                padding: 10px;
                margin-top: 10px;
                border-radius: 5px;
                text-align: center;
                font-family: 'Ubuntu', sans-serif;
            `;
            return;
        }

        if (!emailRegex.test(email)) {
            errorDiv.textContent = 'Please enter a valid email address.';
            errorDiv.style.cssText = `
                color: #D32F2F;
                padding: 10px;
                margin-top: 10px;
                border-radius: 5px;
                text-align: center;
                font-family: 'Ubuntu', sans-serif;
            `;
            return;
        }

        // Create or update success notification div
        if (!successDiv) {
            successDiv = document.createElement('div');
            successDiv.id = 'form-success';
            form.appendChild(successDiv);
        }
        successDiv.style.cssText = `
            display: none;
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            margin-top: 10px;
            border-radius: 5px;
            text-align: center;
            font-family: 'Ubuntu', sans-serif;
        `;

        // Send email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            from_name: name,
            from_email: email,
            message: message,
            to_email: 'fcse23-018@thuto.bac.ac.bw'
        }).then(
            function (response) {
                // Show success message
                successDiv.textContent = 'Message sent successfully!';
                successDiv.style.display = 'block';

                // Clear form fields
                form.querySelector('#name').value = '';
                form.querySelector('#email').value = '';
                form.querySelector('#message').value = '';

                // Hide success message after 3 seconds
                setTimeout(() => {
                    successDiv.style.display = 'none';
                }, 3000);
            },
            function (error) {
                errorDiv.textContent = 'Failed to send message. Please try again.';
                errorDiv.style.cssText = `
                    color: #D32F2F;
                    padding: 10px;
                    margin-top: 10px;
                    border-radius: 5px;
                    text-align: center;
                    font-family: 'Ubuntu', sans-serif;
                `;
                console.error('EmailJS error:', error);
            }
        );
    });
});
