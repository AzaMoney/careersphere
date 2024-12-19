document.addEventListener("DOMContentLoaded", () => {

    // Close dropdown when clicking outside or on an option
    document.addEventListener("click", (event) => {
        const dropdowns = document.querySelectorAll(".dropdown-content");
        const isDropdownButton = event.target.classList.contains("dropbtn");

        dropdowns.forEach((dropdown) => {
            if (!dropdown.contains(event.target) && !isDropdownButton) {
                dropdown.style.display = "none";
            }
        });
    });

    // Toggle dropdown visibility on click
    const dropdownButtons = document.querySelectorAll(".dropbtn");
    dropdownButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            const dropdownContent = button.nextElementSibling;

            // Toggle dropdown visibility
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    });

    const fab = document.getElementById("fab");
    const contactForm = document.getElementById("contact-form");

    fab.addEventListener("click", () => {
        contactForm.classList.toggle("hidden");
    });

    const arrows = document.querySelectorAll(".job-posting-card a");
    const arrow = document.querySelector(".landing-page-competition-text a");

    // Loop through each arrow and add the blinking class
    arrows.forEach((arrow) => {
        arrow.classList.add("blink");
    });

    arrow.classList.add("blink");

});