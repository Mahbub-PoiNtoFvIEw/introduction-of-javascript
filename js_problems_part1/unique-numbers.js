/**
 * create a function that remove duplicates vales
 */

function noDuplicates(arr) {
  const uniqueNumbers = [];
  for (const item of arr) {
    if (uniqueNumbers.includes(item) === false) {
      uniqueNumbers.push(item);
    }
  }
  console.log(arr);
  return uniqueNumbers;
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
const uniqueNumber = noDuplicates(name1);
console.log(uniqueNumber);
