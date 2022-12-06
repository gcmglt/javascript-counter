//* Manipolazione DOM e creazione componenti del counter
const buttonsWrapper = document.querySelector(".buttons-wrapper");
const counterContainer = document.querySelector(".counter-container");

function counterCreationHandler(tag, style, content) {
  component = document.createElement(tag);
  component.className = style;
  component.innerHTML = content;
  return component;
}

const decreaseButton = counterCreationHandler("button", "btn decrease-button", "-");
buttonsWrapper.append(decreaseButton);

const resetButton = counterCreationHandler("button", "btn reset-button", "RESET");
buttonsWrapper.append(resetButton);

const increaseButton = counterCreationHandler("button", "btn increase-button", "+");
buttonsWrapper.append(increaseButton);

const counterDisplay = counterCreationHandler("span", "counter-display", "0");
counterContainer.append(counterDisplay);

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
