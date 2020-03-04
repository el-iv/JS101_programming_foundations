let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function select(produce) {
  let selectedProduce = {};
  let produceKeys = Object.keys(produce);

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produce[currentKey];
    if (currentValue === 'Fruit') {
      selectedProduce[currentKey] = currentValue;
    }
  }

return selectedProduce;
}

console.log(select(produce));
