// Starting with the string:
let famousWords = "seven years ago...";

//show two different ways to put the expected "Four score and " in front of it.


// 1
str1 = "Four score and " + famousWords;
console.log(str1);

// 2
str2 = "Four score and ".concat(famousWords);
console.log(str2);
