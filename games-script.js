document.addEventListener("DOMContentLoaded", function() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            header.classList.add("hidden");
        } else {
            // Scrolling up
            header.classList.remove("hidden");
        }
        lastScrollY = window.scrollY;
    });
});
