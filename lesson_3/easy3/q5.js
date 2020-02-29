/*
The following function unnecessarily uses two return statements to return boolean
values. How can you eliminate the unnecessary duplication?
*/

// first solution
function isColorValid(color) {
  return (color === "blue" || color === "green");
}

// second solution
const isColorValid2 = color => color === "blue" || color === "green";

//third solution
const isColorValid3 = color => ["blue", "green"].includes(color);
