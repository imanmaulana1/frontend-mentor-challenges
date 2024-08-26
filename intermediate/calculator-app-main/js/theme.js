function applyTheme(state) {
  const root = document.documentElement;
  switch (state) {
    case 1:
      root.style.setProperty('--bg-main', 'hsl(222, 26%, 31%)');
      root.style.setProperty('--bg-keypad', 'hsl(223, 31%, 20%)');
      root.style.setProperty('--bg-screen', 'hsl(224, 36%, 15%)');
      root.style.setProperty('--bg-toggle', 'hsl(6, 63%, 50%)');
      root.style.setProperty('--bg-key-1', 'hsl(30, 25%, 89%)');
      root.style.setProperty('--bg-key-2', 'hsl(225, 21%, 49%)');
      root.style.setProperty('--bg-key-3', 'hsl(6, 63%, 50%)');
      root.style.setProperty('--key-shadow-1', 'hsl(28, 16%, 65%)');
      root.style.setProperty('--key-shadow-2', 'hsl(224, 28%, 35%)');
      root.style.setProperty('--key-shadow-3', 'hsl(6, 70%, 34%)');
      root.style.setProperty('--text-calculator', 'hsl(221, 14%, 31%)');
      root.style.setProperty('--text-delete', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--text-equal', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--text-title', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--text-result', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--hover-1', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--hover-2', 'hsl(224, 51%, 76%)');
      root.style.setProperty('--hover-3', 'hsl(6, 93%, 67%)');
      break;

    case 2:
      root.style.setProperty('--bg-main', 'hsl(0, 0%, 90%)');
      root.style.setProperty('--bg-keypad', 'hsl(0, 5%, 81%)');
      root.style.setProperty('--bg-screen', 'hsl(0, 0%, 93%)');
      root.style.setProperty('--bg-toggle', 'hsl(25, 98%, 40%)');
      root.style.setProperty('--bg-key-1', 'hsl(45, 7%, 89%)');
      root.style.setProperty('--bg-key-2', 'hsl(185, 42%, 37%)');
      root.style.setProperty('--bg-key-3', 'hsl(25, 98%, 40%)');
      root.style.setProperty('--key-shadow-1', 'hsl(35, 11%, 61%)');
      root.style.setProperty('--key-shadow-2', 'hsl(185, 58%, 25%)');
      root.style.setProperty('--key-shadow-3', 'hsl(25, 99%, 27%)');
      root.style.setProperty('--text-calculator', 'hsl(60, 10%, 19%)');
      root.style.setProperty('--text-delete', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--text-equal', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--text-title', 'hsl(60, 10%, 19%)');
      root.style.setProperty('--text-result', 'hsl(60, 10%, 19%)');
      root.style.setProperty('--hover-1', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--hover-2', 'hsl(187, 41%, 56%)');
      root.style.setProperty('--hover-3', 'hsl(25, 100%, 61%)');
      break;
    case 3:
      root.style.setProperty('--bg-main', 'hsl(268, 75%, 9%)');
      root.style.setProperty('--bg-keypad', 'hsl(268, 71%, 12%)');
      root.style.setProperty('--bg-screen', 'hsl(268, 71%, 12%)');
      root.style.setProperty('--bg-toggle', 'hsl(176, 100%, 44%)');
      root.style.setProperty('--bg-key-1', 'hsl(268, 47%, 21%)');
      root.style.setProperty('--bg-key-2', 'hsl(281, 89%, 26%)');
      root.style.setProperty('--bg-key-3', 'hsl(176, 100%, 44%)');
      root.style.setProperty('--key-shadow-1', 'hsl(290, 70%, 36%)');
      root.style.setProperty('--key-shadow-2', 'hsl(285, 91%, 52%)');
      root.style.setProperty('--key-shadow-3', 'hsl(177, 92%, 70%)');
      root.style.setProperty('--text-calculator', 'hsl(52, 100%, 62%)');
      root.style.setProperty('--text-delete', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--text-equal', 'hsl(198, 20%, 13%)');
      root.style.setProperty('--text-title', 'hsl(52, 100%, 62%)');
      root.style.setProperty('--text-result', 'hsl(52, 100%, 62%)');
      root.style.setProperty('--hover-1', 'hsl(268, 54%, 44%)');
      root.style.setProperty('--hover-2', 'hsl(280, 56%, 44%)');
      root.style.setProperty('--hover-3', 'hsl(177, 100%, 79%)');
      break;
    default:
      break;
  }
}

function handlePositionState(state) {
  const sliderPosition = document.querySelector('.ball');
  switch (state) {
    case 1:
      sliderPosition.classList.remove('theme-2', 'theme-3');
      break;
    case 2:
      sliderPosition.classList.add('theme-2');
      sliderPosition.classList.remove('theme-3');
      break;
    case 3:
      sliderPosition.classList.add('theme-3');
      sliderPosition.classList.remove('theme-2');
      break;
    default:
      break;
  }
}

function handleTheme() {
  let currentState = parseInt(localStorage.getItem('themeState')) || 1;

  currentState = (currentState % 3) + 1;

  localStorage.setItem('themeState', currentState);
  handlePositionState(currentState);
  applyTheme(currentState);
}

export { applyTheme, handlePositionState, handleTheme };
