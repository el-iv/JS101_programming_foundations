// Determine whether the following object of people and their age contains
// entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty('Herman')); // true
console.log(ages.hasOwnProperty('Spot'));   // false

/*
  The hasOwnProperty() method returns a boolean indicating whether the object
  has the specified property as its own property (as oppposed to inheriting it).
*/
