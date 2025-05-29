const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuClose = document.getElementById('menu-close');
const header = document.querySelector('header');

let lastScrollY = window.scrollY;

menuToggle.addEventListener('click', () => {
  const isActive = navMenu.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isActive);
});

menuClose.addEventListener('click', () => {
  navMenu.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
});

document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    navMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    header.classList.add('header--hidden');
    header.classList.remove('header--visible');
  } else {
    header.classList.remove('header--hidden');
    header.classList.add('header--visible');
  }
  lastScrollY = window.scrollY;

  if (window.scrollY === 0) {
    header.classList.remove('header--visible');
  }
});