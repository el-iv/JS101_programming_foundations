/*
  Given the following data structure, write some code that returns an object
  where the key is the first item in each subarray, and the value is the
  second.
*/

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

/*
  first method using fromEntries method of Object
  let obj = Object.fromEntries(arr);
  console.log(obj);
*/

let obj = {};
arr.forEach(subArray => {
  [key, value] = subArray;
  obj[key] = value;
  }
);
console.log(obj);
