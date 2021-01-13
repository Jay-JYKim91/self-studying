//Both push() and unshift() have corresponding methods that are nearly functional opposites: pop() and shift(). As you may have guessed by now, instead of adding, pop() removes an element from the end of an array, whild shift() removes an element from the beginning. The key difference between pop() and shift() and their cousins push() and unshift(), is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.
let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop(); //['whats up?' ,'hello']
greeting.shift(); //['hello'];

//While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simple looks like this: ...
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2)) //returns [[true, false, true], [true, false, true]]

function filteredArray(arr, elem) {
  let newArr=[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
//filterArray([[3,2,3], [1,6,3],[3,13,26],[19,3,9]],3) returns []
//arr.indexOf(e)는 e가 있는 인덱스를 반환함. 없을 경우 -1 반환

users.hasOwnProperty('Alan'); //returns true
'Alan' in users; //returns true

//We can also generate an array which contains all the keys stored in an object using the Objecet.keys() method and passing in an object as the argument. This will return an array with strings representing each property in the objecet. Again, there will be no specific order to the entries in the array.
