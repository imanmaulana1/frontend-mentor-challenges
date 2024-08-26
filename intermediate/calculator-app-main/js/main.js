import { applyTheme, handlePositionState, handleTheme } from './theme.js';

const savedState = parseInt(localStorage.getItem('themeState')) || 1;

const btnSwitchTheme = document.querySelector('.switch');
const sliderPosition = document.querySelector('.ball');
const labelState = document.querySelectorAll('.label-slider');

labelState.forEach((label) => {
  label.addEventListener('click', function () {
    const currentState = parseInt(this.getAttribute('data-state'));
    localStorage.setItem('themeState', currentState);
    handlePositionState(currentState);
    applyTheme(currentState);
  });
});

btnSwitchTheme.addEventListener('click', handleTheme);

window.onload = function () {
  sliderPosition.classList.add('no-transition');
  handlePositionState(savedState);
  applyTheme(savedState);
  setTimeout(() => {
    sliderPosition.classList.remove('no-transition');
  }, 10);
};
