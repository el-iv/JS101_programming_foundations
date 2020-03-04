//Create an object that expresses the frequency with which each letter occurs in
// this string:

let statement = "The Flintstones Rock";
//The output will look something like the following:

//  { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let chars = statement.split('').filter(char => char !== ' ');
let result = {};

chars.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});

console.log(result);
