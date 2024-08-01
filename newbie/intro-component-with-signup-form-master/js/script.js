const form = document.getElementById('my-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formControls = document.querySelectorAll('.form-control');

  formControls.forEach((item) => {
    const textWrapper = item.querySelector('.text-error');
    const textError = item.querySelector('label').textContent;
    const input = item.querySelector('input');
    const formGroup = item.querySelector('.form-group');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (input.value === '') {
      formGroup.classList.add('error');
      textWrapper.textContent = `${textError} cannot be empty`;
    } else if (input.type === 'email' && !emailPattern.test(input.value)) {
      // Handle invalid email format
      formGroup.classList.add('error');
      textWrapper.textContent = 'Looks like this is not an email';
    } else {
      formGroup.classList.remove('error');
      textWrapper.textContent = ``;
    }
  });
});
