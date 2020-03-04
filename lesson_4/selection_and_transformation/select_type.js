function selectType(produceList, selectionCriteria) {
  let produceKeys = Object.keys(produceList);
  let selectedItems = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === selectionCriteria) {
      selectedItems[currentKey] = currentValue;
    }
  }

  return selectedItems;
}

let produce = {
 apple: 'Fruit',
 carrot: 'Vegetable',
 pear: 'Fruit',
 broccoli: 'Vegetable'
};

console.log(selectType(produce, 'Fruit'));     // => {apple: 'Fruit', pear: 'Fruit'}
console.log(selectType(produce, 'Vegetable')); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
console.log(selectType(produce, 'Meat'));      // => {}
