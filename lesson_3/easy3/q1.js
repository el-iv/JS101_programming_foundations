// Write four different ways to remove all of the elements from the following
// array:
let numbers = [1, 2, 3, 4];

// 1
numbers = [];

// 2
numbers.length = 0;

// 3
numbers.splice(0, numbers.length);

// 4
while (number.length) {
  numbers.pop();
}
