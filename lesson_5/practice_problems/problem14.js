/*
  Given the following data structure write some code to return an array
  containing the colors of the fruits and the sizes of the vegetables.
  The sizes should be uppercase, and the colors should be capitalized.
*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

/*
  The return value should look like this:
  [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

*/

let returnedArr = [];

let items = Object.values(obj);
items.forEach(item => {
  let properties = Object.keys(item); //properties is an object
  let type = properties.type;
  let colors = properties.colors;
  let size = properties.size;

  if (item.type === 'fruit') {
    returnedArr.push(item.colors.slice().map(color => color[0].toUpperCase() + color.slice(1)));
  } else {
    returnedArr.push(item.size.toUpperCase());
  }
});

console.log(returnedArr);
