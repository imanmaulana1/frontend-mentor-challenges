const form = document.getElementById('my-form');
const formWrapper = document.querySelector('.form-wrapper');
const inputEmail = document.getElementById('email');
const textError = document.querySelector('.error');
const iconError = document.querySelector('.icon');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (inputEmail.value === '') {
    textError.textContent = 'This field cannot be empty';
    formWrapper.classList.add('error');
    iconError.classList.add('show');
  } else if (!emailPattern.test(inputEmail.value)) {
    textError.textContent = 'Please provide a valid email';
    formWrapper.classList.add('error');
    iconError.classList.add('show');
  } else {
    textError.textContent = '';
    formWrapper.classList.remove('error');
    iconError.classList.remove('show');
  }
});
