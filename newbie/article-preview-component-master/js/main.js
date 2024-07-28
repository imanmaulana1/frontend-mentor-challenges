const btnShare = document.querySelector('.btn-share');
const tooltip = document.querySelector('.tooltip');
const tooltipMobile = document.querySelector('.tooltip--mobile');
const imgBtn = document.querySelector('#share');

btnShare.addEventListener('click', () => {
  tooltipMobile.classList.toggle('show');
  tooltip.classList.toggle('show');

  if (
    tooltip.classList.contains('show') ||
    tooltipMobile.classList.contains('show')
  ) {
    imgBtn.src = './images/icon-share-2.svg';
    btnShare.style.backgroundColor = '#48556a';
  } else {
    imgBtn.src = './images/icon-share.svg';
    btnShare.style.backgroundColor = '#ecf2f8';
  }
});
