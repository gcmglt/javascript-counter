// *************************************************************
// ****************** Dichiarazione variabili ******************
// *************************************************************
const COUNTER = document.querySelector( ".counter" )
const SUBTRACT = document.querySelector( ".number-subtract" );
const ADD = document.querySelector( ".number-add" );
const RESET = document.querySelector( ".reset-button" );
const WRAPPER = document.querySelector( ".buttons-wrapper" )

// *******************************************************
// ****************** Funzioni pulsanti ******************
// *******************************************************
SUBTRACT.addEventListener( "click", ( ) => {
  COUNTER.innerHTML = Number( COUNTER.innerHTML ) - 1;
} )

ADD.addEventListener( "click", ( ) => {
  COUNTER.innerHTML = Number( COUNTER.innerHTML ) + 1;
} )

RESET.addEventListener( "click", ( ) => {
  COUNTER.innerHTML = 0;
} );

// **************************************************
// ******* Styler pulsanti (event delegation) *******
// **************************************************
WRAPPER.addEventListener( "mouseover", e => {
  if ( e.target.tagName === "BUTTON" ) {
    e.target.style.backgroundColor = "#70877f";
    e.target.style.borderColor = "#ef946c";
  }
} )

WRAPPER.addEventListener( "mouseout", e => {
  if ( e.target.tagName === "BUTTON" ) {
    e.target.style.backgroundColor = "#ef946c";
    e.target.style.borderColor = "#70877f";
  }
} )