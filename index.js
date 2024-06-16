//selecting items by classname
let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav-links");
let crossIcon = document.querySelector(".cross-icon");
let navLink = document.querySelectorAll(".nav-link"); //selecting all elements with class 'nav-link'



hamburger.addEventListener("click", () => {
    //adding/removing[toggling] an extra class 'show' to the element based on 'show' class presence
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