const iconMenu = document.getElementById('menu-burger-icon');
const menuBurger = document.querySelector('.menu-burger');
const menuBurgerInside = document.querySelector('.menu-burger-inside');
const bodyBg = document.getElementById('body-bg');
iconMenu.addEventListener("click", function (e) {
    menuBurger.classList.toggle('_active');
    bodyBg.classList.toggle('opacity-body');
});

const iconClose = document.getElementById('burger-close');
iconClose.addEventListener("click", function (e) {
    menuBurger.classList.toggle('_active');
    bodyBg.classList.toggle('opacity-body');
});

document.addEventListener("mouseup", function(event) {
    if (menuBurger.classList.contains('_active') && !menuBurgerInside.contains(event.target)) {
        menuBurger.classList.toggle('_active');
        bodyBg.classList.toggle('opacity-body');
    }
});