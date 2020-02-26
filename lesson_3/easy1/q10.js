/*
  Return a new version of this sentence that ends just before the word house.
  Don't worry about spaces or punctuation: remove everything starting from the
  beginning of house to the end of the sentence.
*/

let advice = "Few things in life are as important as house training your pet"
              +  " dinosaur.";

let newStr = advice.slice(0, advice.indexOf('house'));
console.log(newStr); // Few things in life are as important as

/*
  slice() method extracts a section of a string and returns it as a new string,
  without modifying the original string.


  The indexOf() method returns the index within the calling String object of
  the first occurrence of the specified value, starting the search at fromIndex.
  Returns -1 if the value is not found.
*/
