// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
/*
let counter = 1;
const callback = () => {
  console.log("Hello World");
  counter++;

  if (counter === 5) {
    clearInterval(intervalId);
    console.log("Done");
  }
};

const intervalId = setInterval(callback, 1000);
*/

//more challange

//Challange 01

const greeting = (delay) => {
  setTimeout(() => {
    console.log(`Hello World. `, delay);
    greeting(delay + 1);
  }, delay * 1000);
};

//greeting(1);

// Challange 02

const greetingAdvanced = (delay) => {
  let count = 1;

  const intervalId = setInterval(() => {
    if (count === 5) {
      clearInterval(intervalId);
      greetingAdvanced(delay + 100);
    }

    console.log(`Hello World. `, delay);
    count++;
  }, delay);
};

greetingAdvanced(100);
