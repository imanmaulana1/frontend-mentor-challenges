import { applyTheme, handlePositionState, handleTheme } from './theme.js';
import {
  handleInput,
  handleDelete,
  handleReset,
  handleSymbol,
  calculate,
} from './calculator.js';

const savedState = parseInt(localStorage.getItem('themeState')) || 1;

const btnSwitchTheme = document.querySelector('.switch');
const sliderPosition = document.querySelector('.ball');
const labelState = document.querySelectorAll('.label-slider');
const keypads = document.querySelectorAll('.key');

keypads.forEach((keypad) => {
  keypad.addEventListener('click', () => {
    const symbol = keypad.getAttribute('data-operator');
    const number = keypad.getAttribute('data-value');
    const action = keypad.getAttribute('data-action');

    if (number) handleInput(number);

    if (action) {
      switch (action) {
        case 'delete':
          handleDelete();
          break;
        case 'reset':
          handleReset();
          break;
        case 'equal':
          calculate();
          break;
      }
    }

    if (symbol) handleSymbol(symbol);
  });
});

labelState.forEach((label) => {
  label.addEventListener('click', function () {
    const currentState = parseInt(label.getAttribute('data-state'));
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
