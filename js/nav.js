const hamburgerIcon = document.querySelector('.hamburger-icon');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');

hamburgerIcon.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

body.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !hamburgerIcon.contains(event.target)) {
    navLinks.classList.remove('open');
  }
});
