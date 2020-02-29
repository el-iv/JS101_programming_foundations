/*
  One day, Spot was playing with the Munster family's home computer, and he
  wrote a small program to mess with their demographic data.
  After writing this function, he typed the following code:

  messWithDemographics(munsters);
  Before Grandpa could stop him, Spot hit the Enter key with his tail.
  Did the family's data get ransacked? Why or why not?
*/

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

console.log(munsters);

/*
  Yes, the family's data get ransacked. In JavaScript, objects are passed by
  reference. Thus, demoObject starts off points to the munsters object. His
  program could replace that with some other object, and the family's data would
  be safe. However, in this case, the program doesn't reassign demoObject; it
  just uses it, as-is. Thus, the object that gets changes by the function is the
  munsters object.
*/
