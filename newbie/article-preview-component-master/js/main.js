document.querySelector('.btn-share').addEventListener('click', () => {
  document.querySelector('.tooltip').classList.add('show');
});

document.querySelector('.btn-share--close').addEventListener('click', () => {
  document.querySelector('.tooltip').classList.remove('show');
});
