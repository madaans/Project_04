/*
    Project Number: 4
    Author: Sanchi Madaan
    Date: 24 April, 2024
    Description: This JavaScript file contains the interactive logic for Project 4, including form validation and event handling. 
*/

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('subscription-form'); 
    const formMessage = document.getElementById('form-message'); 

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        // Get the form field values
        const name = document.getElementById('subscriber-name').value.trim();
        const email = document.getElementById('subscriber-email').value.trim();
        const phone = document.getElementById('subscriber-phone').value.trim(); 

        // Reset the form message
        formMessage.style.display = 'none'; 
        formMessage.textContent = ""; 

        // Validate the form fields
        if (!name || !email || !phone) { 
            formMessage.textContent = "Please fill in all fields correctly."; 
            formMessage.style.display = 'block'; 
            return; 
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!emailRegex.test(email)) { 
            formMessage.textContent = "Invalid email address."; 
            formMessage.style.display = 'block'; 
            return; 
        }

        // Phone number validation 
        const phoneRegex = /^[0-9]{10,15}$/; 
        if (!phoneRegex.test(phone)) { 
            formMessage.textContent = "Invalid phone number."; 
            formMessage.style.display = 'block'; 
            return; 
        }

        // If all validations are successful
        formMessage.textContent = "Subscription successful!"; 
        formMessage.style.display = 'block'; 
    });
});
