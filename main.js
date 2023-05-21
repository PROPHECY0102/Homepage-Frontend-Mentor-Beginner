const primaryNav = document.querySelector('.primary-nav');
const mobileToggle = document.querySelector('.mobile-toggle');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

mobileToggle.addEventListener('click', () => {
    primaryNav.toggleAttribute('data-visible');
    hamburger.toggleAttribute('data-visible');
    closeIcon.toggleAttribute('data-visible');
    overlay.toggleAttribute('data-visible');
});
