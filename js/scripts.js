//* Manipolazione DOM e creazione componenti del counter
const buttonsWrapper = document.querySelector(".buttons-wrapper");
const counterContainer = document.querySelector(".counter-container");

function counterCreationHandler(tag, style, content) {
  component = document.createElement(tag);
  component.className = style;
  component.innerHTML = content;
  return component;
}

const subtractButton = counterCreationHandler("button", "btn subtract-button", "-");
counterContainer.append(subtractButton);

const counterDisplay = counterCreationHandler("span", "counter-display", "0");
counterContainer.append(counterDisplay);

const addButton = counterCreationHandler("button", "btn add-button", "+");
counterContainer.append(addButton);

const resetButton = counterCreationHandler("button", "btn reset-button", "RESET COUNTER");
buttonsWrapper.append(resetButton);

//* Funzione pulsanti
let count = 0;

buttonsWrapper.addEventListener("click", (e) => {
  if (e.target === subtractButton) {
    count--;
  } else if (e.target === addButton) {
    count++;
  } else {
    count = 0;
  }

  counterDisplay.innerHTML = count;
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
