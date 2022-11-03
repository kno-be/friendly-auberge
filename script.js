// NAVBAR
const menu = document.querySelector('.nav');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');

menu.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menu.classList.toggle('change');
})

navList.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menu.classList.toggle('change');
})
// END OF NAVBAR