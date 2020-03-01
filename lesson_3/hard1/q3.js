// Given the following similar sets of code, what will each code snippet print?

// A
function messWithVars1(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars1(one, two, three);

console.log(`one is: ${one}`);      // one
console.log(`two is: ${two}`);      // two
console.log(`three is: ${three}`);  // three

//  B
function messWithVars2(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars2(one, two, three);

console.log(`one is: ${one}`);      // one
console.log(`two is: ${two}`);      // two
console.log(`three is: ${three}`);  // three

function messWithVars3(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars3(one, two, three);

console.log(`one is: ${one}`);      // two
console.log(`two is: ${two}`);      // three
console.log(`three is: ${three}`);  // one
