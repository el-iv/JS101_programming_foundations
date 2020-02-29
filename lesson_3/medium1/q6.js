//What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false

/*
  The ouput is false. NaN is a special numeric value that indicates that an
  operation that was intended to return a number failed. JS doesn't let you
  use == and === to determine wheter a value is NaN.

  To test whether the value is NaN, we use the isNaN() function:
*/
console.log(isNaN(nanArray[0])); // true
