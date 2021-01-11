//Recursion is the concept that the function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first 'n' elements of an array to create the product of those elements. Using a 'for' loop.

function multiply(array, n) {
  let product = 1;
  for(let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}

//However, notice that multiply(array, n) == multiply(array, n-1) * array[n-1]. That means you can rewrite multiply function in terms of ifself and never need to use a loop.

function multiply(array, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(array, n-1) * arr [n-1];
  }
}

//The recursion version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n-1. That function call is evaluted in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.
//Note: Recursion functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

//Write a recursion function, sum(arr, n), that returns the sum of the first 'n' elements of an array arr.

function sum(arr, n) {
  if (n<=0) {
    return 0;
  } else if (n > 0) {
    return sum(arr, n-1) + arr[n-1];
  }
}

//Use Recursion to create a countdown.
//We have defined a function called countdown with one parameter(n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5,4,3,2,1]. Your function must use recursion by calling itself and must not use loops of any kind.
function countdown(n) {
  if (n <1) {
    return [];
  } else {
    const countdownArray = countdown(n-1);
    countdownArray.unshift(n);
    return countdownArray;
  }
}

//Use Recursion to create a range of numbers.
//We have defined a function named rangeOfNumbers with two parameters(). The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.
function rangeOfNumbers(startNum, endNum){
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    let numbers = rangeOfNumbers(startNum, endNum-1);
    numbers.push(endNum);
    return numbers;
  }
}
function rangeOfNumbers(startNum, endNum){
  return startNum === endNum ? [startNum] : rangeOfNumbers(startNum, endNum-1).concat(endNum);
}
function rangeOfNumbers(startNum, endNum){
  return startNum === endNum ? [startNum] : [...rangeOfNumbers(startNum, endNum-1), endNum];
}
