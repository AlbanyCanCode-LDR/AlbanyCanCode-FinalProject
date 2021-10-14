/* 
  ********************************************************************************

  Authors: Lawrence Darwin Reid

  ********************************************************************************
 */

/* /////////////////////////////////////////////////////////////////// */

function timerSequence(event) {
  // This will be used for de-bugging
  console.log("timerSequence");

  // This helps to prevent page reload
  event.preventDefault();

  //This re-sets the counter for another run
  iterations = 0;
  //These function take user input and return the value to the timerSequence function
  timeOne = getInputInMilliseconds("duration1");
  timeTwo = getInputInMilliseconds("duration2");
  maxIterations = getInputValueAsInt("iterations");

  howMany();

  //Helps prevent page reload
  return false;
}

/* /////////////////////////////////////////////////////////////////// */

/* /////////////////////////////////////////////////////////////////// */

function getInputInMilliseconds(elementId) {
  let elemValue = getInputValueAsInt(elementId);

  return elemValue * 1000 * 60; // Converts milliseconds to minutes
}
function getInputValueAsInt(elementId) {
  let elem = document.getElementById(elementId);
  let elemValue = parseInt(elem.value);
  return elemValue;
}
/* /////////////////////////////////////////////////////////////////// */

function howMany() {
  iterations += 1;
  if (iterations <= maxIterations) {
    first();
  }
}

//The sleep function creates a new promise object with the data passed from the variable time one.
////when the browser reads this, it notes that the function exists and it takes a paramater named resolve
//The constructor for the promise implicitly creates a resolve. This allows the timeout function to be used

/* /////////////////////////////////////////////////////////////////// */

function sleep(ms) {
  function timeoutFunc(resolve) {
    setTimeout(resolve, ms);
  }

  let newProm = new Promise(timeoutFunc);
  return newProm;
}

/* /////////////////////////////////////////////////////////////////// */

function first() {
  sleep(timeOne).then(() => {
    alert("Great Work!, Start Your Break");
    second();
  });
}

function second() {
  sleep(timeTwo).then(() => {
    alert("You Have Been On Break Long Enough, Time To Get Back To Work");
    howMany();
  });
}

/* /////////////////////////////////////////////////////////////////// */

// a promise represents a value that is
// unknown now that may become known in the
// future in other words in asynchronous
// value think of it like a ride hailing
// app when you request a ride the driver
// makes a promise to pick you up while
// you're waiting the ride is pending in
// the future if all goes according to plan
// the driver will resolve to pick you up
// then take you somewhere
// at which point your ride has been
// fulfilled but in some cases the driver
// might reject your ride in which case
// you'll need to catch one somewhere else
// either way the original request is now
// finally settled

// as a developer you might
// want to create a promise to represent an
// asynchronous value 

// but more often than
// not you'll be consuming promises to use
// the result of an asynchronous operation
// in your code on the Left we're making
// promises on the right we're using them
// when constructed a promise starts off in
// a pending state it's your job to define
// a callback function called an executor
// that defines when to resolve or reject
// the promise this is where you would kick
// off your asynchronous work
//  on the other
// side the consumer of the promise has
// called it's then method it's waiting for
// the asynchronous value to be fulfilled

// when that happens it will call this
// function with the value as its argument

// we fulfill the promise by calling
// resolve but there's always the
// possibility of an exception in that case
// we can reject the promise and send the
// error back down to the consumer which
// can use the catch method and an entirely
// different function for handling
// exceptions and if you just want to run
// some code no matter what you can use
// finally to handle both possibilities all
// of these methods return promises which
// means they can be chained together to
// handle multiple asynchronous operations
// in a row this has been JavaScript
// promises in 100 seconds thanks for
// watching and also make sure to follow my
// brand new Instagram account for even
// more content on this topic I will see
// you in the next one
