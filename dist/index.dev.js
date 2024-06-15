"use strict";

var hamburger = document.querySelector(".hamburger");
var navLinks = document.querySelector(".nav-links");
var crossIcon = document.querySelector(".cross-icon");
var navLink = document.querySelectorAll(".nav-link");
hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("show");
  crossIcon.classList.toggle("show");
  navLink.forEach(function (link) {
    link.classList.toggle("show");
  });
});
crossIcon.addEventListener("click", function () {
  navLinks.classList.toggle("show");
  crossIcon.classList.toggle("show");
  navLink.forEach(function (link) {
    link.classList.toggle("show");
  });
});