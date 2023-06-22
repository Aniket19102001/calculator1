// Get the elements
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

// Add event listeners to the number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
  });
});

// Add event listeners to the operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
  });
});

// Add event listener to the clear button
clearButton.addEventListener('click', () => {
  display.value = '';
});

// Add event listener to the equals button
equalsButton.addEventListener('click', () => {
  display.value = eval(display.value);
});
