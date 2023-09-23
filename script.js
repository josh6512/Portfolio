
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('nav-list');
navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

/////
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        // Create an object from the form data
        const formDataObj = {};
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });

        // Send the data to the server using a POST request
        fetch("graceful-florentine-3aaca2.netlify.app/", {
            method: "POST",
            body: JSON.stringify(formDataObj),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("Email sent successfully!");
                } else {
                    alert("Email sending failed.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
});
