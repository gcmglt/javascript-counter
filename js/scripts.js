// Funzione di sottrazione collegata al pulsante -
function subtraction() {
  let counter = document.querySelector(".counter");
  let counterUpdate = Number(counter.innerHTML) - 1;

  counter.innerHTML = counterUpdate;
}

// Funzione di addizione collegata al pulsante +
function addition() {
  let counter = document.querySelector(".counter");
  let counterUpdate = Number(counter.innerHTML) + 1;

  counter.innerHTML = counterUpdate;
}

// Funzione di reset collegata al pulsante RESET COUNTER
function resetCounter() {
  let counter = document.querySelector(".counter");
  let counterReset = 0;

  counter.innerHTML = counterReset;
}

// Accesso ai pulsanti -, + e RESET
let subtract = document.querySelector(".number-subtract");
let add = document.querySelector(".number-add");
let reset = document.querySelector(".reset-button");

// Events listener per utilizzare i pulsanti -, + e RESET
subtract.addEventListener("click", subtraction);
add.addEventListener("click", addition);
reset.addEventListener("click", resetCounter);

// ********** Inizio styler pulsanti **********
// Restyler CSS onclick
function clickStyleSubtract() {
  subtract.style.backgroundColor = "#ef946c";
  subtract.style.borderColor = "#70877f";
}

function clickStyleAdd() {
  add.style.backgroundColor = "#ef946c";
  add.style.borderColor = "#70877f";
}
function clickStyleReset() {
  reset.style.backgroundColor = "#ef946c";
  reset.style.borderColor = "#70877f";
}

// Restyler CSS onmouseover
function mouseOverSubtract() {
  subtract.style.backgroundColor = "#70877f";
  subtract.style.borderColor = "#ef946c";
}

function mouseOverAdd() {
  add.style.backgroundColor = "#70877f";
  add.style.borderColor = "#ef946c";
}

function mouseOverReset() {
  reset.style.backgroundColor = "#70877f";
  reset.style.borderColor = "#ef946c";
}

// Restyler CSS onmouseout
function mouseOutSubtract() {
  subtract.style.backgroundColor = "#ef946c";
  subtract.style.borderColor = "#70877f";
}

function mouseOutAdd() {
  add.style.backgroundColor = "#ef946c";
  add.style.borderColor = "#70877f";
}

function mouseOutReset() {
  reset.style.backgroundColor = "#ef946c";
  reset.style.borderColor = "#70877f";
}

// Events listener per stylare i pulsanti al click
subtract.addEventListener("click", clickStyleSubtract);
add.addEventListener("click", clickStyleAdd);
reset.addEventListener("click", clickStyleReset);

// Events listener per stylare i pulsanti al mouseover
subtract.addEventListener("mouseover", mouseOverSubtract);
add.addEventListener("mouseover", mouseOverAdd);
reset.addEventListener("mouseover", mouseOverReset);

// Events listener per stylare i pulsanti al mouseut
subtract.addEventListener("mouseout", mouseOutSubtract);
add.addEventListener("mouseout", mouseOutAdd);
reset.addEventListener("mouseout", mouseOutReset);
// ********** Fine styler pulsanti **********
