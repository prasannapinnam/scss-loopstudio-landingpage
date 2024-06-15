let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav-links");
let crossIcon = document.querySelector(".cross-icon");
let navLink = document.querySelectorAll(".nav-link");



hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    crossIcon.classList.toggle("show");
    navLink.forEach((link) => {
        link.classList.toggle("show");
    });
});

crossIcon.addEventListener("click",() => {
    navLinks.classList.toggle("show");
    crossIcon.classList.toggle("show");
    navLink.forEach((link) => {
        link.classList.toggle("show");
    });
})