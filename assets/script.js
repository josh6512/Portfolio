// Get references to the toggle button and navigation links
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('nav-list');

// Add click event listener to the toggle button
navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
