//calculator program

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value); // Evaluate the expression
  } catch (error) {
    display.value = "Math Error"; // Handle invalid expressions
  }
}
