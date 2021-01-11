//Use destructuring assignment to assign variables from objects.
//Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.
const user = { name: 'John Suh', age: 27 };
const { name: userName, age: userAge } = user;

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

const { johnSuh: {age: userAge, email: userEmail }} = user;

const { today: {low: lowToday, high: highToday }} = LOCAL_FORECAST;

//Use destructuring assignment with the rest parameter to reassign array elements
//In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
//The result is similar to Array.prototype.slice(), as shown below:
const [a,b, ...arr] = [1,2,3,4,5,7];
console.log(a, b); //1,2
console.log(arr); // [3,4,5,7]

//Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  'use strict';
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);

//Use destructuring assignment to pass an object as a functioins' parameters
const profileUpdate = (profileData) => {
  const { name, age, nationalitym location} = profileData;
}
const profileUpdate =({ name, age, nationality, location }) => {
}

//simple question
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    let a = `<li class="text-warging">${arr[i]}</li>`
    failureItems.push(a);
  }
  return failureItems;
}
const failuresList = makeList(result.failure);

//Write concise object literal declarations using object property shorthand
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
const getMousePosition = (x, y) => ({ x, y })

//Use class syntax to define a constructor function
//ES6 provides a new syntax to create objects, using the class keyword.
//It should be noted that the class syntax is just syntax, and not a full-fledged class-based imiplementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.
//In ES5, we usually define a constructor function and use the new keyword to instantiate an object.
const SpaceShuttle = function(targetPlanet) {
  this.targetPlanet = targetPlanet;
}
const zeus = new SpaceShuttle('Jupiter');
//The class syntax simply replaces the constructor function creation:
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
//It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.
//The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming sectioni of the JavaScript Algorithms And Data Structures Certification.

//Use getters and setters to control access to an object
//You can obtain values from an object and set the value of a property within an object.
//These are classically called getters ans setters.
//Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
//Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
class Book{
  constructor(author){
    this._author = authro;
  }
  get writer() {
    return this._author;
  }
  set writer(updateAuthor) {
    this._author = updateAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer); // anonymous
novel.writer = 'newAuthor';
console.log(novel.writer); // newAuthor
//Notive the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details. Note: it's convention to precede the name of a private variable with an underscore(_). However, the practice itself does not make a variable private.
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature() {
    return (5/9)*(this.fahrenheit - 32);
  }
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
const thermos = new Thermostat(76);
let temp = thermos.temperature; //24,22 in celsius
thermos.temperature = 26;
temp = thermos.temperature; //26 in celsius
