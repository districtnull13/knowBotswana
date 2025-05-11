/* Scroll to contact form and focus on name field */
function scrollToForm() {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
        const nameField = document.getElementById('name');
        if (nameField) nameField.focus();
        else console.error("Name field not found");
    } else {
        console.error("Contact form section not found");
    }
}

/* Scroll to contact form, pre-fill message, and focus on name field */
function scrollToFormWithStory() {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
        const messageField = document.getElementById('message');
        if (messageField) {
            messageField.value = "I’d like to submit a story about [Botswana culture/history/conservation]...";
            formSection.scrollIntoView({ behavior: 'smooth' });
            const nameField = document.getElementById('name');
            if (nameField) nameField.focus();
            else console.error("Name field not found");
        } else {
            console.error("Message field not found");
        }
    } else {
        console.error("Contact form section not found");
    }
}

/* Handle form submission */
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    if (!form) {
        console.error("Form with ID 'contactForm' not found");
        return;
    }
    if (!status) {
        console.error("Status div with ID 'formStatus' not found");
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log("Form submit event triggered");

        if (validateForm()) {
            sendEmail();
        }
    });

    function validateForm() {
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const fields = [name, email, message];
        const errorDivs = ['nameError', 'emailError', 'messageError'];

        // Check if fields exist
        fields.forEach((field, index) => {
            if (!field) {
                console.error(`Field with ID '${errorDivs[index].replace('Error', '')}' not found`);
                isValid = false;
            }
        });

        // Check error divs
        errorDivs.forEach(id => {
            if (!document.getElementById(id)) {
                console.error(`Error div with ID '${id}' not found`);
            }
        });

        if (!isValid) return false;

        // Reset error states
        fields.forEach(field => {
            field.classList.remove('border-error');
            const errorDiv = document.getElementById(`${field.id}Error`);
            if (errorDiv) errorDiv.style.display = 'none';
        });
        status.textContent = '';
        status.className = '';

        // Name validation
        if (name.value.trim().length < 2) {
            showError(name, 'nameError', 'Name must be at least 2 characters.');
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            showError(email, 'emailError', 'Please enter a valid email address.');
            isValid = false;
        }

        // Message validation
        if (message.value.trim().length < 10) {
            showError(message, 'messageError', 'Message must be at least 10 characters.');
            isValid = false;
        }

        if (!isValid) {
            status.textContent = 'Please fill out all fields correctly.';
            status.className = 'text-red-500 bg-red-100 p-3 rounded text-center font-bold text-base';
            console.log("Validation failed");
        }

        return isValid;
    }

    function showError(field, errorId, message) {
        field.classList.add('border-error');
        const errorDiv = document.getElementById(errorId);
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
    }

    function sendEmail() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Create mailto link
        const subject = encodeURIComponent('Know Botswana Contact Form Submission');
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:thedonswiss@gmail.com?subject=${subject}&body=${body}`;

        try {
            // Open email client
            window.location.href = mailtoLink;
            status.className = 'text-green-500 bg-green-100 p-3 rounded text-center font-bold text-base';
            status.textContent = 'Opening your email client...';
            console.log("Mailto link triggered:", mailtoLink);

            // Clear form
            form.reset();

            // Clear status after 3 seconds
            setTimeout(() => {
                status.textContent = '';
                status.className = '';
            }, 3000);
        } catch (error) {
            status.className = 'text-red-500 bg-red-100 p-3 rounded text-center font-bold text-base';
            status.textContent = 'Failed to open email client. Please try again.';
            console.error("Mailto error:", error);
        }
    }
});
