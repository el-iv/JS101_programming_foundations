/*
  Given the following data structure, write some code to return an array which
  contains only the objects where all the numbers are even.
*/

let arr = [
{ a: [1, 2, 3] },
{ b: [2, 4, 6], c: [3, 6], d: [4] },
{ e: [8], f: [6, 10] },
];

function isAllNumbersEvenArray(arr) {
  return arr.every(number => number % 2 === 0);
}

function isAllEvenSubArrays(arr) {
  return arr.every(subArr => isAllNumbersEvenArray(subArr));
};

let returnedArr = arr.filter(obj => {
  let arrays = Object.values(obj);
  return isAllEvenSubArrays(arrays);
});

console.log(returnedArr);
// => [ { e: [ 8 ], f: [ 6, 10 ] } ]
