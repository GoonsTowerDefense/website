document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    toggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });
});
