const btnHamburger = document.querySelector('.hamburger');
const navWrapper = document.querySelector('.nav-links');

btnHamburger.addEventListener('click', () => {
  navWrapper.classList.toggle('show');
});
