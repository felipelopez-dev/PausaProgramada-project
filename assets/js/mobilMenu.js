document.addEventListener('DOMContentLoaded', () => {
    const menuIcon        = document.querySelector('.header-mobile__image');
    const closeMenuButton = document.querySelector('.close-menu');
    const mobileMenu      = document.querySelector('.mobile');

    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});