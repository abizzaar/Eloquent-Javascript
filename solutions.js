/* Chapter 2 */
function loopTriangle() {
  for (let line = "#"; line.length < 8; line += "#") {
    console.log(line);
  }
}

function fizzBuzz() {
  for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }
}

function chessBoard(size) {
  let board = "";
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
  console.log(board);
}

/* Chapter 3 */
function min(a, b) {
  if (a > b) return b;
  else return a;
}

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n > 0) return isEven(n-2);
  else return isEven(n+2);
}

function countChar(str, char) {
  let strLen = str.length;
  let count = 0;
  for (let i = 0; i < strLen; i++) {
    if (str[i] == char) count += 1;
  }
  return count;
}

/* Chapter 4 */
function range(start, end, step = start < end ? 1 : -1) {
  let range = [];
  if (step == 0) throw "Cannot have a step of zero";
  if (step > 0) {
    for (i = start; i <= end; i += step) {
      range.push(i);
    }
  }
  else {
    for (i = start; i >= end; i += step) {
      range.push(i);
    }
  }
  return range;
}

function sum(range) {
  let sum = 0;
  for (let num of range) {
    sum += num;
  }
  return sum;
}

function reverseArray(array) {
  let reverse = [];
  let length = array.length;
  for (i = length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }
  return reverse;
}

function reverseArrayInPlace(array) {
  let halfOfLength = Math.floor(array.length / 2);
  for (let i = 0; i < halfOfLength; i++) {
    let curr = array[i];
    let replaceIndex = array.length - i - 1;
    array[i] = array[replaceIndex];
    array[replaceIndex] = curr;
  }
  return array;
}

function arrayToList(array) {
  let lst = null;
  for (let i = array.length - 1; i >= 0; i--) {
    lst = {value:array[i], rest: lst};
  }
  return lst;
}

function listToArray(lst) {
  let array = [];
  for (let node = lst; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(el, lst) {
  return {value: el, rest: lst};
}

function nth(lst, num) {
  if (!lst) return undefined;
  else if (num == 0) return lst.value;
  else return nth(lst.rest, num - 1);
}

function deepEqual(a, b) {
  if (a===b) return true;
  if (typeof(a) == "object" && typeof(b) == "object" && (a!=null) && (b!=null)) {
    if (Object.keys(a).length != Object.keys(b).length) return false;
    for (let key of Object.keys(a)) {
      if (!deepEqual(a[key], b[key])) return false;
    }
  }
  return false;
}

/* run statements */
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

/*

Write a function deepEqual that takes two values and returns true only if they are the same value or are 
objects with the same properties, where the values of the properties are equal when compared with a recursive 
call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties 
compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. 
But you have to take one silly exception into account: because of a historical accident, typeof null also produces 
"object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.

*/