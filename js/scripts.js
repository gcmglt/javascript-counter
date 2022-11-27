//* Dichiarazione variabili
const counterDisplay = document.querySelector(".counter-display");
const subtractButton = document.querySelector(".subtract-button");
const addButton = document.querySelector(".add-button");
const resetButton = document.querySelector(".reset-button");
const buttonsWrapper = document.querySelector(".buttons-wrapper");

//* Funzione pulsanti -, + e RESET COUNTER
buttonsWrapper.addEventListener("click", (e) => {
  if (e.target === subtractButton) {
    --counterDisplay.innerHTML;
  } else if (e.target === addButton) {
    ++counterDisplay.innerHTML;
  } else if (e.target === resetButton) {
    counterDisplay.innerHTML = 0;
  } else return counterDisplay;
});

//* Styler pulsanti mouse over
buttonsWrapper.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.style.backgroundColor = "#70877f";
    e.target.style.borderColor = "#ef946c";
  }
});

//* Styler pulsanti mouse out
buttonsWrapper.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.style.backgroundColor = "#ef946c";
    e.target.style.borderColor = "#70877f";
  }
});
