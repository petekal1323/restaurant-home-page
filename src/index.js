// src/index.js
import "./styles.css";

import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

// Load the home tab by default
loadHome();

// Set up tab switching for dynamic content
document.getElementById("nav-home-tab").addEventListener("click", loadHome);
document.getElementById("nav-menu-tab").addEventListener("click", loadMenu);
document.getElementById("nav-contact-tab").addEventListener("click", loadContact);


// // Toggle the navigation menu on mobile devices.
// const hamburger = document.getElementById("hamburger");
// const navList = document.querySelector(".nav-list");
// hamburger.addEventListener("click", () => {
//   navList.classList.toggle("active");
//   hamburger.classList.toggle("active");
// });