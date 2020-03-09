/*
  Perform the same transformation of sorting the subarrays we did in the previous
  exercise with one difference; sort the elements in descending order.
*/
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let returnedArr = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort((a, b) => b.charCodeAt() - a.charCodeAt());
  } else {
    return subArr.slice().sort((a, b) => b - a);
  }
});

console.log(returnedArr);
