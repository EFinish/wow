const potatoes = [5, 12, 43, 13, 72, 68];
const cabbages = [];
const carrots = [];

for (let i = 0; i < potatoes.length; i++) {
  const mod = potatoes[i] % 2;

  if (mod == 0) {
    cabbages.push(potatoes[i]);

    continue;
  }

  carrots.push(potatoes[i]);
}

console.log(cabbages);
console.log(carrots);
