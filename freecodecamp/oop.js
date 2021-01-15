let ownProps = [];
for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps); //prints['name', 'numLegs']

function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

let duck = new Bird();
let beaggle = new Dog();
console.log(duck.constructor === Bird); //prints true
console.log(beagle.constructor === Dog); //prints true
//Note that the constructor property is a reference to the constructor function that created the instance. The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
//Since the constructor property can be over written (which will be covered in the next two callenges) it's generally better to use the 'instanceof' method to check the type an object.

//A more efficient way is to set the prototype to a new object that already conatins the properties. This way, the properties are added all at once:
Bird.prototype = {
  numLesg: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
}

//There is one crucial effect of manually setting the protytype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance, But since the property has been overwritten, it now gives false results:
duck.constructor === Bird; //false
duck.constructor === Object; //true
duck instanceof Bird; //true
//To fix this, whenever a prototype is manually set to a new obect, remember to define the constructor property:
Bird.prototype = {
  constructor: Bird,
  numLesg: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
}

let duck = new Bird("Donald");
Bird.prototype.isPrototypeOf(duck); //return true

//All objects in JS have a prototype. Also, an object's prototype itself is an objeect.
typeof Bird.prototype; //yields 'object'
//Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototypd is Object.prototype:
Object.prototype.isPrototypeOf(Bird.prototype);//returns true
duck.hasOwnProperty('name'); //yields true
//The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JS. Therefore, any object can use the hasOwnProperty method.

function Animal(){};
Animal.prototype = {
  contstructor: Animal;
  describe: function() {
    console.log("My nams is " + this.name);
  }
}
Bird.prototype = {
  constructor: Bird
};
Dog.prototype = {
  constructor: Dog
};

function Bird(){}
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor //function Animal(){...}
//But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, you can manually set Bird's constructor property to the Bird object:
Bird.prototype.constructor = Bird;
duck.constructor //function Bird(){}

Bird.prototype.fly = function() {
  console.log("I'm flying.");
}

ChildObject.prototype = Object.create(ParentObject.prototype);
ChildObject.prototype.methodName = function() {...};
//It's possible to override an inherited method. I't done the same way - by adding a method to ChildObjeect.prototype using the same method name as the one to override.

//For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.
let flyMixin = functioin(obj) {
  obj.fly = function() {
    console.log("I'm flying.");
  }
}
flyMixin(bird);
bird.fly(); //prints "I'm flying.";

function Bird() {
  let hatchedEgg = 10; //private variable
  /* publicly available method that a bird object can use */
  this.getHatchedEggCount = function() {
    return hatchedEgg;
  }
}
let ducky = new Bird();
ducky.getHatchedEggCount(); //returns 10

//Immediately Invoked Function Expression(IIFE)
(function() {
  console.log('executes right away')
})();

//An IIFE is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:
let motionModule = (function() {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log('Glide');
      }
    },
    flyMixin: function() {
      obj.fly = function() {
        console.log('Fly');
      }
    }
  }
})();
