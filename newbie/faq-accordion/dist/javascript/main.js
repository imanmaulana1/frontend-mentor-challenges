const accordionContent = document.querySelectorAll('.faq__content');

const removeShow = (index1) => {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove('show');

      const faqAnswer = item2.querySelector('.faq__answer');
      faqAnswer.style.height = '0px';
    }
  });
};

accordionContent.forEach((item, index) => {
  const faqQuestion = item.querySelector('.faq__question');
  const faqAnswer = item.querySelector('.faq__answer');

  item.classList.contains('show')
    ? (faqAnswer.style.height = `${faqAnswer.scrollHeight}px`)
    : (faqAnswer.style.height = '0px');

  faqQuestion.addEventListener('click', () => {
    item.classList.toggle('show');

    item.classList.contains('show')
      ? (faqAnswer.style.height = `${faqAnswer.scrollHeight}px`)
      : (faqAnswer.style.height = '0px');

    removeShow(index);
  });
});
