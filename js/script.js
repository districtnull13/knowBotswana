// Initialize EmailJS with your Public Key
(function(){
    emailjs.init("4-jTGLqAk6BRlmppF");
})();

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        sendEmail();
    }
});

function validateForm() {
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Reset error states
    [name, email, subject, message].forEach(field => {
        field.classList.remove('border-error');
        document.getElementById(`${field.id}Error`).style.display = 'none';
    });

    // Name validation
    if (name.value.trim().length < 2) {
        showError(name, 'nameError');
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showError(email, 'emailError');
        isValid = false;
    }

    // Subject validation
    if (subject.value.trim() === '') {
        showError(subject, 'subjectError');
        isValid = false;
    }

    // Message validation
    if (message.value.trim().length < 10) {
        showError(message, 'messageError');
        isValid = false;
    }

    return isValid;
}

function showError(field, errorId) {
    field.classList.add('border-error');
    document.getElementById(errorId).style.display = 'block';
}

function sendEmail() {
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        to_email: 'thedonswiss@gmail.com'
    };

    emailjs.send('service_knowBotswana', 'template_prqlp0b', templateParams)
        .then(function(response) {
            status.className = 'text-green-500';
            status.textContent = 'Email sent successfully!';
            form.reset();
        }, function(error) {
            status.className = 'text-red-500';
            status.textContent = 'Failed to send email. Please try again.';
            console.error('EmailJS error:', error);
        });
}
