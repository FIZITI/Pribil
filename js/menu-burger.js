const iconMenu = document.getElementById('menu-burger-icon');
const opacityBody = document.getElementById('opacity-block1');
const opacityBody2 = document.getElementById('opacity-block2');
const menuBurger = document.querySelector('.menu-burger');
iconMenu.addEventListener("click", function (e) {
    menuBurger.classList.toggle('_active');
    document.body.classList.toggle('scroll-none');
    opacityBody.classList.toggle('opacity-body');
    opacityBody2.classList.toggle('opacity-body');
});

const iconClose = document.getElementById('burger-close');
iconClose.addEventListener("click", function (e) {
    menuBurger.classList.toggle('_active');
    document.body.classList.toggle('scroll-none');
    opacityBody.classList.toggle('opacity-body');
    opacityBody2.classList.toggle('opacity-body');
});