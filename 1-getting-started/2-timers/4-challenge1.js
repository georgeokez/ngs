const theOneFunc = (seconds) => {
  console.log(`Hello after ${seconds} seconds`);
};

let seconds = 4;

setTimeout(theOneFunc, seconds * 1000, seconds);
setTimeout(theOneFunc, 2 * seconds * 1000, 2 * seconds);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
