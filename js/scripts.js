//* Dichiarazione variabili
const counterDisplay = document.querySelector(".counter-display");
const decreaseButton = document.querySelector(".decrease-button");
const increaseButton = document.querySelector(".increase-button");
const buttonsWrapper = document.querySelector(".buttons-wrapper");

//* Logica funzionamento pulsanti
let count = 0;

buttonsWrapper.addEventListener("click", (e) => {
  if (e.target === decreaseButton) {
    count--;
  } else if (e.target === increaseButton) {
    count++;
  } else {
    count = 0;
  }
  counterDisplay.innerHTML = count;
});

//* Styler pulsanti al mouseover
buttonsWrapper.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.style.backgroundColor = "#70877f";
    e.target.style.borderColor = "#ef946c";
  }
});

//* Styler pulsanti al mouseout
buttonsWrapper.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.style.backgroundColor = "#ef946c";
    e.target.style.borderColor = "#70877f";
  }
});
