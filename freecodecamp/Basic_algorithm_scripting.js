//return reversed string.
function reverseString(str) {
  return str.split('').reverse().join('');
}

//5! = 1 * 2 * 3 * 4 * 5 = 120
function factorialize(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    retult *= i;
  }
  return result;
}
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

//Find the longest word in a string.
function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (word[i].length > maxLength) {
      maxLength = word[i].length;
    }
  }
  return maxLength
}
function findLongestWordLength(str) {
  return Math.max(...str.split(" ")
              .map(word => word.length));
}
function findLongestWordLength(str) {
  return str.split(' ')
              .reduce(function(x, y) {
                return Math.max(x, y.length)
              }, 0);
}

//return largest numbers in arrays
function largestOfFour(arr) {
  let result = [];
  for (let n = 0; n < arr.length; n++) {
    let largestNumber = arr[n][0];
    for (let i = 1; i < arr[n].length; i++) {
      if (arr[n][i] > largestNumber) {
        largestNumber = arr[n][i];
      }
    }
    results[n] = largestNumber;
  }
  return results;
}
function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev
    })
  })
}
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
function largestOfFour(arr, resultArr =[]) {
  return !arr.length
          ? resultArr
            : largestOfFour(arr.slice(1), resultArr.concat(Math.max(...arr[0])))
}

//confirm the ending.
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
function confirmEnding(str, target) {
  let re = new Regex(target + "$", "i");
  return re.test(str);
}
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

//repeat a string
function repeatStringNumTimes(str, num) {
  let accumulatedStr = '';
  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return '';
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}
function repeatStringNumTimes(str, num) {
  return num > 0 ?
          repeatStringNumTimes(str, num - 1)
            : '';
}

//truncate a string
function truncateString(str, num) {
  if (str.length > num) {
    return str.split('').splice(0, num).join('') + '...';
  } else {
    return str;
  }
}

//finders keepers
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}
function findElement(arr, func) {
  return arr.find(func);
}

//check if it's boolean or not
function boowho(bool) {
  return typeof bool === "boolean";
}

//title case a sentence
function titleCase(str) {
  let converToArray = str.toLowerCase().split(' ');
  let result = converToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(' ');
}
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};
function titleCase(str) {
  let newTitle = str.split(' ');
  let updatedTitle = [];
  for (let i in newTitle) {
    updatedTitle[i] = newTitle[i]
      .toLowerCase()
      .replaceAt(0, newTitle[i].charAt(0).toUpperCase());
  }
  return updatedTitle.join(' ');
}

//slice and splice
function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

//falsy bouncer
function bouncer(arr) {
  return arr.filter(Boolean);
}
function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i])
      newArray.push(arr[i]);
  }
  return newArray;
}

//where do i belong
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a-b;
  });
  for (let a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return a;
  }
  return arr.length;
}
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a-b;
  });
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      count++;
    }
  }
  return count;
}
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a-b;
  });
  var i = 0;
  while (num > arr[i]) {
    i++;
  }
  return i;
}
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a-b;
  });
  return arr.indexOf(num);
}
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}
function getIndexToIns(arr, num) {
  let index = arr
    .sort((curr, next) => curr - next)
    .findIndex(currNum => num <= currNum);
    return index === -1 ? arr.length : index;
}
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

//mutations
function mutation(arr){
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
}
function mutation(arr){
  return arr[1]
    .toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}
function mutation([target, test], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([target, test], i + 1);
}

//chunky monkey
function chunkArrayInGroups(arr, size) {
  let temp = [];
  let result = [];
  for (let a = 0; a < arr.length; a++) {
    if (a % size !=== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }
  if (temp.length !== 0) result.push(temp);
  return result;
}
function chunkArrayInGroups(arr, size) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}
function chunkArrayInGroups(arr, size) {
  let arr2 = [];
  let i = 0;
  while (i < arr.length) {
    arr2.push(arr.slice(i, i + size));
    i += size;
  }
  return arr2;
}
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(chunkArrayInGroups(arr.slice(size), size)
    );
  }
}
