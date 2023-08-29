'use strict';

const preload = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
  preload.classList.add("loaded");
  document.body.classList.add("loaded");
});



// window.addEventListener('load', () => {
//     const preload = document.querySelector('.preload');
//     preload.classList.remove('load');
  
//     // Scroll to the target section after 3 seconds
//     setTimeout(() => {
//       const targetSection = document.getElementById('target-section');
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//     }, 3000); // 3000 milliseconds = 3 seconds
//   });