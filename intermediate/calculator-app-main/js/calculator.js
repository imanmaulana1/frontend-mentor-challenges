let currentInput = '';
let operand = '';
let operator = '';
let isCalculated = false;

function updateDisplay(value) {
  const display = document.querySelector('.result');
  display.textContent = value;
}

function handleInput(value) {
  if (value === '.' && currentInput.includes('.')) return;

  if (value === '0' && currentInput === '0') return;

  if (isCalculated) {
    currentInput = value;
    isCalculated = false;
  } else if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }

  updateDisplay(currentInput);
}

function handleDelete() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
}

function handleReset() {
  currentInput = '';
  operand = '';
  operator = '';
  isCalculated = false;
  updateDisplay(currentInput);
}

function handleSymbol(symbol) {
  if (currentInput !== '' || isCalculated) {
    operand = currentInput;
    currentInput = '';
  }
  operator = symbol;
  isCalculated = false;
}

function calculate() {
  if (operand && currentInput) {
    const num1 = Number(operand);
    const num2 = Number(currentInput);

    switch (operator) {
      case '+':
        currentInput = (num1 + num2).toString();
        break;
      case '-':
        currentInput = (num1 - num2).toString();
        break;
      case 'x':
        currentInput = (num1 * num2).toString();
        break;
      case '/':
        if (num2 === 0) {
          currentInput = '';
          return updateDisplay('Error DIV/0!');
        }
        currentInput = (num1 / num2).toString();
        break;
    }

    updateDisplay(currentInput);
    operand = currentInput;
    isCalculated = true;
  }
}

export {
  updateDisplay,
  handleInput,
  handleDelete,
  handleReset,
  handleSymbol,
  calculate,
};
