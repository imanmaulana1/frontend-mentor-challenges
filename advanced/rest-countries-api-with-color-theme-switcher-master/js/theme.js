$(document).ready(function () {
  const body = $('body');
  const iconDarkMode = $('#icon-theme');

  function applyTheme(isDarkMode) {
    if (isDarkMode) {
      localStorage.setItem('darkMode', 'active');
      body.addClass('darkmode');
      iconDarkMode.removeClass('fa-regular').addClass('fa-solid');
    } else {
      localStorage.removeItem('darkMode');
      body.removeClass('darkmode');
      iconDarkMode.removeClass('fa-solid').addClass('fa-regular');
    }
  }

  const theme = localStorage.getItem('darkMode');
  applyTheme(theme === 'active');

  $('.nav-darkmode').on('click', () => {
    const isDarkMode = !body.hasClass('darkmode');
    applyTheme(isDarkMode);
  });
});
