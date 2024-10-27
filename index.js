// clear btn
const clear = document.querySelector(".clear");

// display screen.
const ansDisplay = document.querySelector(".display .result");

// zero btn
const zero = document.querySelector(".zero");

// decimal point btn
const decimalPoint = document.querySelector(".point");

// All buttons 1 - 9
const buttonsOneToNine = document.querySelectorAll(".keys.numbers");

// variable to store operand 1, operator and openand 2.
let num1 = null;
let num2 = null;
let operator = null;

// operator place holder
const operatorPlaceHolder = document.querySelector(".show-operator");

// add button
const addBtn = document.querySelector(".plus");

// minus button
const minusBtn = document.querySelector(".minus");

// multiply button
const multiply = document.querySelector(".mul");

// division button
const divide = document.querySelector(".divide");

// equals button
const equal = document.querySelector(".equals");

// operation function
function operation(x, y, oprnd) {
  let r;
  switch (oprnd) {
    case "+":
      r = Math.ceil(Number(x + y) * 100) / 100;
      break;
    case "-":
      r = Math.ceil(Number(x - y) * 100) / 100;
      break;
    case "*":
      r = Math.ceil(Number(x * y) * 100) / 100;
      break;
    case "/":
      r = Math.ceil(Number(x / y) * 100) / 100;
      break;
    case "%":
      r = x % y;
      break;
  }
  return r;
}

// functionality for clear button
clear.addEventListener("click", (e) => {
  ansDisplay.textContent = "Welcome";
  operatorPlaceHolder.textContent = "";
  num1 = null;
  num2 = null;
});

// functionality for Zero button
zero.addEventListener("click", (e) => {
  // console.log(ansDisplay.textContent);
  //   let len = ansDisplay.textContent.length;
  if (ansDisplay.textContent == "Welcome") {
    ansDisplay.textContent = 0;
  } else if (ansDisplay.textContent == "0") {
    return;
  } else if (ansDisplay.textContent == "-") {
    ansDisplay.textContent += "0.";
  } else {
    ansDisplay.textContent += 0;
  }
});

// functionality for decimal point button
decimalPoint.addEventListener("click", (e) => {
  if (ansDisplay.textContent == "Welcome") {
    ansDisplay.textContent = "0.";
  } else if (ansDisplay.textContent.includes(".")) {
    return;
  } else if (ansDisplay.textContent == "-") {
    ansDisplay.textContent += "0.";
  } else {
    ansDisplay.textContent += ".";
  }
});

// functionality for 1 - 9 buttons
function oneToNineBtnHandler(e) {
  if (ansDisplay.textContent == "Welcome") {
    // console.log(e.currentTarget.dataset.val);
    ansDisplay.textContent = e.currentTarget.dataset.val;
  } else if (ansDisplay.textContent == "0") {
    ansDisplay.textContent = e.currentTarget.dataset.val;
  } else {
    ansDisplay.textContent += e.currentTarget.dataset.val;
  }
}

// adding event listener for all buttons 1 - 9
buttonsOneToNine.forEach((btn) =>
  btn.addEventListener("click", oneToNineBtnHandler)
);

// functionality for add button.
addBtn.addEventListener("click", (e) => {
  if (ansDisplay.textContent == "Welcome") {
    return;
  }
  //  minus case
  if (ansDisplay.textContent == "-") {
    ansDisplay.textContent = "0";
    return;
  }

  operatorPlaceHolder.textContent = "+";
  if (num1 == null) {
    let val = ansDisplay.textContent;
    num1 = Math.ceil(Number(val) * 100) / 100;
    ansDisplay.textContent = "0";
    return;
  }
  num2 = Math.ceil(Number(ansDisplay.textContent) * 100) / 100;
  let res = operation(num1, num2, "+");
  if (res == Infinity || res == -Infinity || String(res) === "NaN") {
    ansDisplay.textContent = "0";
  } else {
    ansDisplay.textContent = res;
  }
  operatorPlaceHolder.textContent = "";
  num2 = null;
  num1 = null;
});

// functionality for minus button.
minusBtn.addEventListener("click", (e) => {
  if (ansDisplay.textContent == "Welcome") {
    ansDisplay.textContent = "-";
    return;
  }
  if (ansDisplay.textContent == "-") {
    return;
  }

  operatorPlaceHolder.textContent = "-";
  if (num1 == null) {
    let val = ansDisplay.textContent;
    num1 = Math.ceil(Number(val) * 100) / 100;
    ansDisplay.textContent = "0";
    return;
  }
  num2 = Math.ceil(Number(ansDisplay.textContent) * 100) / 100;
  let res = operation(num1, num2, "-");
  if (res == Infinity || res == -Infinity || String(res) === "NaN") {
    ansDisplay.textContent = "0";
  } else {
    ansDisplay.textContent = res;
  }
  operatorPlaceHolder.textContent = "";

  num2 = null;
  num1 = null;
});

// functionality for multiply button
multiply.addEventListener("click", (e) => {
  if (ansDisplay.textContent == "Welcome") {
    return;
  }
  //  minus case
  if (ansDisplay.textContent == "-") {
    ansDisplay.textContent = "0";
    return;
  }
  operatorPlaceHolder.textContent = "*";
  if (num1 == null) {
    let val = ansDisplay.textContent;
    num1 = Math.ceil(Number(val) * 100) / 100;
    ansDisplay.textContent = "0";
    return;
  }
  num2 = Math.ceil(Number(ansDisplay.textContent) * 100) / 100;
  let res = operation(num1, num2, "*");
  if (res == Infinity || res == -Infinity || String(res) === "NaN") {
    ansDisplay.textContent = "0";
  } else {
    ansDisplay.textContent = res;
  }
  operatorPlaceHolder.textContent = "";

  num2 = null;
  num1 = null;
});

// functionality for division
divide.addEventListener("click", (e) => {
  if (ansDisplay.textContent == "Welcome") {
    return;
  }
  //  minus case
  if (ansDisplay.textContent == "-") {
    ansDisplay.textContent = "0";
    return;
  }
  operatorPlaceHolder.textContent = "/";
  if (num1 == null) {
    let val = ansDisplay.textContent;
    num1 = Math.ceil(Number(val) * 100) / 100;
    ansDisplay.textContent = "0";
    return;
  }
  num2 = Math.ceil(Number(ansDisplay.textContent) * 100) / 100;
  console.log(num1, num2);
  let res = operation(num1, num2, "/");
  console.log(res);
  if (res == Infinity || res == -Infinity || String(res) === "NaN") {
    ansDisplay.textContent = "0";
  } else {
    ansDisplay.textContent = res;
  }
  operatorPlaceHolder.textContent = "";

  num2 = null;
  num1 = null;
});

// functionality for equals button
equal.addEventListener("click", (e) => {
  if (ansDisplay.textContent == "Welcome") {
    return;
  }
  if (num1 == null) {
    return;
  }
  //  minus case
  if (ansDisplay.textContent == "-") {
    ansDisplay.textContent = "0";
    return;
  }
  num2 = Math.ceil(Number(ansDisplay.textContent) * 100) / 100;
  console.log(num1, num2);
  let res = operation(num1, num2, operatorPlaceHolder.textContent);
  console.log(res);
  if (res == Infinity || res == -Infinity || String(res) === "NaN") {
    ansDisplay.textContent = "0";
  } else {
    ansDisplay.textContent = res;
  }
  operatorPlaceHolder.textContent = "";
  num1 = null;
  num2 = null;
});
