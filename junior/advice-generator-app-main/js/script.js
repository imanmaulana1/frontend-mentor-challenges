const quote = document.querySelector('.advice-quote');
const idQuote = document.querySelector('#id-quote');
const btn = document.querySelector('.advice-generate');

async function getAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const { slip } = await response.json();

    quote.textContent = `"${slip.advice}"`;
    idQuote.textContent = `#${slip.id}`;
  } catch (error) {
    idQuote.textContent = `${error}`;
    quote.textContent = `Oops! Something went wrong. Please try again later.`;
  }
}

btn.addEventListener('click', getAdvice);

document.addEventListener('DOMContentLoaded', function () {
  getAdvice();
});
