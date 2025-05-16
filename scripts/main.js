// This file contains the JavaScript code that handles form submission, validates input, and sends the data to the server.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('interest-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const services = document.getElementById('services').value;

        if (validateForm(name, phone, email, services)) {
            const formData = {
                name: name,
                phone: phone,
                email: email,
                services: services
            };

            sendFormData(formData);
        } else {
            alert('Please fill in all fields correctly.');
        }
    });

    function validateForm(name, phone, email, services) {
        return name && phone && email && services;
    }

    function sendFormData(data) {
        fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert('Thank you for your interest! We will get back to you soon.');
                form.reset();
            } else {
                alert('There was an error submitting your form. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your form. Please try again later.');
        });
    }
});