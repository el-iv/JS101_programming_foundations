/*
  How would you order the following array of number strings by descending
  numeric value (largest number value to smallest)?
*/

let arr = ['10', '11', '9', '7', '8'];

/*
arr.sort((a, b) => {
  if (Number(a) > Number(b)) {
    return -1;
  } else if (Number(a) < Number(b)) {
    return 1;
  } else {
    return 0;
  }
});
*/

arr.sort((a, b) => Number(b) - Number(a));

console.log(arr);
