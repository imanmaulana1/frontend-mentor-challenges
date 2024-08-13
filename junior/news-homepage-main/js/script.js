const hamburgerBtn = document.getElementById('btn-hamburger');
const closeBtn = document.getElementById('btn-close');
const overlay = document.getElementById('wrapper');
const navMobile = document.getElementById('nav-mobile');

function openMenu() {
  overlay.classList.add('active');
  navMobile.classList.add('active');
}

function closeMenu() {
  overlay.classList.remove('active');
  navMobile.classList.remove('active');
}

hamburgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
