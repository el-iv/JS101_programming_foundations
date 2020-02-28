//Determine whether the name Dino appears in the strings below.

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

/*
  The includes() method of String determines whether one string may be found
  within another sting, return true or false.
*/

console.log(str1.includes('Dino')); // false
console.log(str2.includes('Dino')); // true
