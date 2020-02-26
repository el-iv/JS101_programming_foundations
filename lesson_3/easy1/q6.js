//We have most of the Munster family in our ages object:
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

//Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };

console.log(Object.assign(ages, additionalAges));
/*
  The Object.assign() method copies all enumerable own properties from one or
  more source objects to a target object. It returns the target object.
*/
