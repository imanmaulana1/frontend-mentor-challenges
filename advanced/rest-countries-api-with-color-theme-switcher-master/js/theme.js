$(document).ready(function () {
  const root = document.documentElement;
  const theme = localStorage.getItem('darkMode');

  function setDarkMode() {
    $('#icon-theme').removeClass('fa-regular').addClass('fa-solid');
    root.style.setProperty('--background-main', 'hsl(207, 26%, 17%)');
    root.style.setProperty('--element', 'hsl(209, 23%, 22%)');
    root.style.setProperty('--text', 'hsl(0, 0%, 100%)');
  }

  function setLightMode() {
    $('#icon-theme').removeClass('fa-solid').addClass('fa-regular');
    root.style.setProperty('--background-main', 'hsl(0, 0%, 98%)');
    root.style.setProperty('--element', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--text', 'hsl(200, 15%, 8%)');
  }

  if (theme === 'active') {
    $('body').addClass('darkmode');
    setDarkMode();
  } else {
    $('body').removeClass('darkmode');
    setLightMode();
  }

  $('.nav-darkmode').on('click', () => {
    $('body').toggleClass('darkmode');

    if ($('body').hasClass('darkmode')) {
      localStorage.setItem('darkMode', 'active');
      setDarkMode();
    } else {
      localStorage.removeItem('darkMode');
      setLightMode();
    }
  });
});
