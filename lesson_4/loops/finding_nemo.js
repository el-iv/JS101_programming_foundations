let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let index = 0; index < fish.length; index++) {
  console.log(fish[index]);
  if (fish[index] === 'Nemo') {
    break;
  }
}
