//A promise in JS is exactly what it sounds like - you use it to make a promise to do something, usually asynchromously. When the task completes, you either fulfill your promise of fail to doso. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the ourcome of the promise. The syntax looks like this:
const myPromise = new Promise((resolve, reject) => {});
//A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, an reject is used when you want it to fail. These are methods that take an argument, as seen below.
const myPromise = new Promise((resolve, reject) => {
  if(condition) {
    resolve("Promise was fulfilled")
  } esle {
    reject("Promise was rejected")
  }
});
//Promises are most useful when you have a process that takes an unknown amount of time in your code, often a server request. When you jmake a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve.
myPromise.then(result => {
  console.log(result);
})
//catch is the method used when your promise has been rejected. It is executed immediatly after a promise's reject method is called.
myPromise.catch(error => {
  console.log(error)
})
//error is the argument passed in to the reject method.
