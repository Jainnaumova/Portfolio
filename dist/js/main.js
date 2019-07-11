// Select DOM elements

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.menu-item');

// Set Initial State of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function openMenu() {
  menuBtn.classList.remove('close');
  menu.classList.remove('show');
  menuNav.classList.remove('show');
  menuBranding.classList.remove('show');
  navItems.forEach(item => item.classList.remove('show'));
  showMenu = false;
}

function closeMenu() {
  menuBtn.classList.add('close');
  menu.classList.add('show');
  menuNav.classList.add('show');
  menuBranding.classList.add('show');
  navItems.forEach(item => item.classList.add('show'));
  showMenu = true;
}

function toggleMenu() {
  if (!showMenu) {
    closeMenu()
  } else {
    openMenu()
  }
}
