let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === null) {
    continue;
  }
  console.log(cities[i]);
}
