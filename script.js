let firstNumber;
let secondNumber;
let operator;

let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    if (button.value === "+" || button.value === "-" || button.value === "x" || button.value === "/") {
      operator = button.value;
      firstNumber = parseFloat(display.value);
      display.value = "";
    } else if (button.value === "=") {
      secondNumber = parseFloat(display.value);
      display.value = operate(operator, firstNumber, secondNumber);
    } else if (button.value === "C") {
      display.value = "";
    } else {
      display.value += button.value;
    }
    if(display.value == 'NaN'){
      display.value = 'ERROR';
    }
  });
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "x") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

let i = 0;
let txt = 'Welcome to a nice calculator'
let speed = 50;
let cursor = true;
let speedC = 500;

function typeWriter(){
  if (i < txt.length){
    let text = document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}





typeWriter();
 