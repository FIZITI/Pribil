const iconMenu = document.getElementById('menu-burger-icon');
const menuBurger = document.querySelector('.menu-burger');
iconMenu.addEventListener("click", function (e) {
    menuBurger.classList.toggle('_active');
    document.body.classList.toggle('opacity-body');
});

const iconClose = document.getElementById('burger-close');
iconClose.addEventListener("click", function (e) {
    menuBurger.classList.toggle('_active');
    document.body.classList.toggle('opacity-body');
});

document.addEventListener("mouseup", function(event) {
    if (menuBurger.classList.contains('_active') && !menuBurger.contains(event.target)) {
        menuBurger.classList.toggle('_active');
        document.body.classList.toggle('opacity-body');
    }
});