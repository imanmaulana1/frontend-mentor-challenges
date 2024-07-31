const myForm = document.getElementById('form-wrapper');
myForm.addEventListener('submit', (e) => {
  let msg = document.querySelector('.text-error');
  let email = e.target['email'];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value == '') {
    msg.textContent = 'Whoops! It looks like you forgot to add your email';
    email.classList.add('error');
  } else if (!emailPattern.test(email.value)) {
    msg.textContent = 'Please provide a valid email address';
    email.classList.add('error');
  } else {
    msg.textContent = '';
    email.classList.remove('error');
  }

  if (msg.textContent !== '') {
    e.preventDefault();
  }
});
