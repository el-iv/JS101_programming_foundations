//How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino');
console.log(flintstones);

/*
  The push() method of Array adds one or more elements to the end of an array
  and returns the new length of the array.
*/

/*
  Alternate solution using concat() method
  let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
  flintstones = flintstones.concat("Dino");
  flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]

*/
