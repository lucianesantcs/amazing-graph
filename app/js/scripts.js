// menu mobile toggle
const toggleMenu = document.querySelector('#btnHamburger');
const menu = document.querySelector('.nav');
toggleMenu.addEventListener('click', () => {
  toggleMenu.classList.toggle('open');
  menu.classList.toggle('open');
});
