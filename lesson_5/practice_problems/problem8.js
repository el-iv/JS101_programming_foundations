/*
  Using the forEach method, write some code to output all vowels from the
  strings in the arrays. Don't use a for or while loop.
*/

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

function isVowel(letter) {
  return "aeiouy".includes(letter);
}

Object.entries(obj).forEach(entry => {
  let words = entry[1];
  words.forEach(word => {
    let chars = word.split("");
    chars.forEach(char => {
      if (isVowel(char)) {
        console.log(char);
      }
    });
  });
});
