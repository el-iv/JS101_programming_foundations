function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers[counter] = currentNum * 2;

    counter += 1;
  }
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers);
console.log(myNumbers);

/*
  Rather than returning a new array, this function returns a reference to the
  (mutated) original array.
*/
