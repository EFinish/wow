const approvedVeggies = ["spinach", "broccoli", "cauliflower"];
const blendable = ["mango", "pinneapple", "banana", "blueberry"];
const approvedFruit = [...blendable, "apple", "orange", "tangerine"];
const myProduce = ["cauliflower", "mango", "banana", "broccoli", "apple"];

function peelVegetable(veggie) {
  if (!approvedVeggies.includes(veggie)) {
    console.log("cannot peel this vegetable!");
    exit();
  }

  return `peeled ${veggie}`;
}

function processFruit(fruit, smoothiefy) {
  if (!approvedFruit.includes(fruit)) {
    console.log("cannot process this fruit!");
    exit();
  }

  if (smoothiefy) {
    if (!blendable.includes(fruit)) {
      console.log("cannot process this fruit!");
      exit();
    }

    return `blended ${fruit}`;
  }

  return `chopped ${fruit}`;
}

myProduce.forEach((element) => {
  let resp;

  if (approvedVeggies.includes(element)) {
    resp = peelVegetable(element);
  }
  if (blendable.includes(element)) {
    resp = processFruit(element, true);
  }
  if (approvedFruit.includes(element)) {
    resp = processFruit(element, false);
  }

  console.log(resp);
});
