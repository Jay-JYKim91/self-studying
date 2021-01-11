function lookUpProfile(name, prop) {
  for(let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
}

//Generate Random Whole Numbers with JS.
//Math.floor(Math.random()*20)
//Remember that Math.random() can never quite return a 1 and, because wer'er rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.

//Use this technique to generate and return a random whole number between 0 and 9.
function rendomWholeNum(){
  return Math.floor(Math.random()*10);
}

//Generate Random Whole Numbers within a Range.
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Use the parseInt Function with a Redix
function convertToInteger(str) {
  return parseInt(str, 10); //10진수로 변환
}
