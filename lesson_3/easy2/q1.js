/*
  Given a string, return a new string that replaces every occurrence of the word
  "important" with "urgent":
*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.replace('important', 'urgent'));

/*
  The replace() method returns a new string with some or all matches of a
  pattern replaced by a replacement. The pattern can be a string or a RegExp,
  and the replacement can be a string or a function to be called for each match.
  If pattern is a string, only the first occurrence will be replaced.
*/

/*
  The code above only replaces the first occurrence if the string contains two
  or more occurences.

  The function rouputAllOccurencesReplacedStr() below replaces all the occurences.
*/

let str = "banana apple banana apple banana apple.";

function ouputAllOccurencesReplacedStr(str, word, newWord) {
  let newStr = str;
  while(newStr.includes(word)) {
    newStr = newStr.replace(word, newWord);
    console.log(str.includes(word));
  }
  return newStr;
}

console.log(rouputAllOccurencesReplacedStr(str, 'apple', 'cherry'));
