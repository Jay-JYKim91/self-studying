//In JS, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.
//To achieve this, we often use the following syntax;
const myFunc = function() {
  let myLet = "value";
  return myLet;
}
//ES6 provides us with the syntatic sugar to not have to write anonymous functions this way. Instead, you can use arro function syntax:
const myFunc = () => {
  let myLet = "value";
  return myLet;
}
//When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:
const myFunc = () => "value";

//Use the rest parameter with function parameters
//In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
function howMany(...args) {
  return "You have passed " + arr.length + " arguments";
}
//The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.
//Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
const sum = (...args) => {
  return args.reduce((a,b) => a + b, 0);
}
