//What will the following code output?

console.log(false == '0');  // true
console.log(false === '0'); // false

/*
  The === operator behaves as a traditional equality operator does in most
  languages: it evaluates to true when the two expressions on either side have
  the same type and value.

  The == operator coerces the values to the same type before comparing them.

  Line 3 will ouputs false.  The boolean false is coerced to the number 0 and
  the comparison becomes 0 == '0'. Then, the string '0' gets coerced  to the
  number 0 since a number is comparing with a string.
  0 == 0 evaluates to true.

  Line 4 will ouputs false. false is of boolean type whereas '0' is of a string
  type. The two expressions on either side have different types, as a result,
  it evaluates to false.
*/
