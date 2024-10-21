const froyoFlavors = {
  Vanilla: "3",
  Strawberry: "1",
  Coffee: "2",
};

console.table(froyoFlavors);

const userInputString = prompt("Please enter your Froyo order.");
const stringArray = userInputString.split(",");

const flavorCount = countOrders(stringArray);

function countOrders(array) {
  const count = {};
  for (const flavor of array) {
    count[flavor] = (count[flavor] || 0) + 1;
  }
  return count;
}

const combinedData = {};
for (const flavor in froyoFlavors) {
  combinedData[flavor] = {
    originalCount: froyoFlavors[flavor],
    orderedCount: flavorCount[flavor] || 0,
  };
}

combinedData.newFlavors = stringArray.filter(
  (flavor) => !Object.keys(froyoFlavors).includes(flavor),
);

for (const flavor of combinedData.newFlavors) {
  combinedData[flavor] = {
    originalCount: 0,
    orderedCount: flavorCount[flavor] || 0,
  };
}

console.log("Froyo Order Summary:");
console.table(combinedData);
