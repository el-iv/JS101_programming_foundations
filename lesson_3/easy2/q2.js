/*
  The Array.prototype.reverse method reverses the order of elements in an array,
  and Array.prototype.sort can rearrange the elements in a variety of ways,
  including descending. Both of these methods mutate the original array as shown
  below. Write two distinct ways of reversing the array without mutating the
  original array.
  Use reverse for the first solution, and sort for the second.

  let numbers = [1, 2, 3, 4, 5];
  numbers.reverse();
  console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

*/

// 1
let numbers = [1, 2 ,3, 4, 5];
let numbers2 = numbers.slice().reverse();
console.log(numbers2); // [ 5, 4, 3, 2, 1 ]
console.log(numbers); //  [ 1, 2, 3, 4, 5 ]

// 2
let reversedArray = [...numbers].sort((a, b) => b - a);
console.log(reversedArray);
