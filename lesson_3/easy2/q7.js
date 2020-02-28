// Consider the following object:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

/*  Create an array from this object that contains only two elements:
    Barney's name and Barney's number:
    [ 'Barney', 2 ]
*/

let arr1 = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift();
console.log(arr1);

let arr2 = Object.entries(flintstones).filter(pair => pair[1] == 2).shift();
console.log(arr2);


/*
  The Object.entries() method returns an array of a given object's own enumerable
  string-keyed property [key, value] pairs, in the same order as that provided
  by a for...in loop. (The only important difference is that a for...in
  loop enumerates properties in the prototype chain as well).
*/
