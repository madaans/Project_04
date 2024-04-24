/*
    Project Number: 4
    Author: Sanchi Madaan
    Date: 24 April, 2024
    Description: This JavaScript file contains the interactive logic for Project 4. 
*/

document.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.getElementById('mobile-menu');
    let sideNav = document.getElementById('side-nav');

    menuToggle.addEventListener('click', function() {
        if (sideNav.style.left === '0px') {
            sideNav.style.left = '-250px';
        } else {
            sideNav.style.left = '0px';
        }
    });

    let mainContent = document.querySelector('.main-content'); 
    let aboutLink = document.querySelector('a[href="about.html"]');
    let aboutSection = document.getElementById('about-section');

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); 

        let readSection = document.getElementById('read-section');
        let dailyVerseSection = document.getElementById('daily-verse-section');
        let contactSection = document.getElementById('contact-section'); 

        if (readSection && readSection.classList.contains('active')) {
            readSection.classList.remove('active');
        }
        if (dailyVerseSection && dailyVerseSection.classList.contains('active')) {
            dailyVerseSection.classList.remove('active');
        }
        if (contactSection && contactSection.classList.contains('active')) {
            contactSection.classList.remove('active');
        }

        if (!aboutSection.classList.contains('active')) {
            fetch('about.html')
                .then(response => response.text())
                .then(html => {
                    aboutSection.innerHTML = html; 
                    aboutSection.classList.add('active'); 
                    mainContent.style.opacity = '0'; 
                })
                .catch(err => console.error('Failed to load About content', err));
        } else {
            aboutSection.classList.remove('active'); 
            mainContent.style.opacity = '1'; 
        }
    });

    let readLink = document.querySelector('a[href="read.html"]');
    let readSection = document.getElementById('read-section');

    readLink.addEventListener('click', function(event) {
        event.preventDefault();

        if (aboutSection && aboutSection.classList.contains('active')) {
            aboutSection.classList.remove('active'); 
        }
        if (dailyVerseSection && dailyVerseSection.classList.contains('active')) {
            dailyVerseSection.classList.remove('active'); 
        }
        if (contactSection && contactSection.classList.contains('active')) {
            contactSection.classList.remove('active'); 
        }

        if (!readSection.classList.contains('active')) {
            fetch('read.html')
                .then(response => response.text())
                .then(html => {
                    readSection.innerHTML = html; 
                    readSection.classList.add('active'); 
                    mainContent.style.opacity = '0'; 
                })
                .catch(err => console.error('Failed to load Read content', err));
        } else {
            readSection.classList.remove('active'); 
            mainContent.style.opacity = '1'; 
        }
    });

    let dailyVerseLink = document.querySelector('a[href="daily-verse.html"]');
    let dailyVerseSection = document.getElementById('daily-verse-section');

    dailyVerseLink.addEventListener('click', function(event) {
        event.preventDefault(); 

        if (aboutSection && aboutSection.classList.contains('active')) {
            aboutSection.classList.remove('active'); 
        }
        if (readSection && readSection.classList.contains('active')) {
            readSection.classList.remove('active'); 
        }
        if (contactSection && contactSection.classList.contains('active')) {
            contactSection.classList.remove('active'); 
        }

        if (!dailyVerseSection.classList.contains('active')) {
            fetch('daily-verse.html')
                .then(response => response.text())
                .then(html => {
                    dailyVerseSection.innerHTML = html; 
                    dailyVerseSection.classList.add('active'); 
                    mainContent.style.opacity = '0'; 
                })
                .catch(err => console.error('Failed to load Daily Verse content', err));
        } else {
            dailyVerseSection.classList.remove('active'); 
            mainContent.style.opacity = '1'; 
        }
    });

    let contactLink = document.querySelector('a[href="contact.html"]');
    let contactSection = document.getElementById('contact-section');

    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        if (aboutSection && aboutSection.classList.contains('active')) {
            aboutSection.classList.remove('active'); 
        }
        if (readSection && readSection.classList.contains('active')) {
            readSection.classList.remove('active'); 
        }
        if (dailyVerseSection && dailyVerseSection.classList.contains('active')) {
            dailyVerseSection.classList.remove('active'); 
        }

        if (!contactSection.classList.contains('active')) {
            fetch('contact.html')
                .then(response => response.text())
                .then(html => {
                    contactSection.innerHTML = html; 
                    contactSection.classList.add('active'); 
                    mainContent.style.opacity = '0'; 
                })
                .catch(err => console.error('Failed to load Contact content', err));
        } else {
            contactSection.classList.remove('active'); 
            mainContent.style.opacity = '1'; 
        }
    });
});
