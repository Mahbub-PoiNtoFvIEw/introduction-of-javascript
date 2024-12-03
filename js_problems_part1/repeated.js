// repeated
function isRepeated(arr) {
  let uniqueNumbers = [];
  for (let item of arr) {
    if (arr.indexOf(item) !== arr.lastIndexOf(item)) {
      uniqueNumbers.push(item);
    }
  }
  console.log(arr);
  return [...new Set(uniqueNumbers)];
}
const name1 = [
  "mahbub",
  "hiron",
  "alamin",
  "prince",
  "alamin",
  "prince",
  "masud",
];
const repeatedNumber = isRepeated(name1);
console.log(repeatedNumber);
