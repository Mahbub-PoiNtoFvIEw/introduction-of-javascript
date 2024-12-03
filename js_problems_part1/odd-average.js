
/**
 * function take an array as an parameter
 * give me the average of the odd numbers in the array
 * we can solve this many ways
 * i am going to show only two ways
 */

// 1st way that used only 1 loop
function oddAverage(numbers) {
  // odds is the array that contain only odd numbers
  const odds = [];
  let sum = 0;
  let avg = 0;
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
      sum = sum + number;
      avg = sum / odds.length;
    }
  }
  console.log(odds, sum, odds.length);
  return "average of odd numbers using 1 loop : " + avg.toFixed(2);
}

const num = [10, 5, 12, 7, 15, 25, 20, 9, 27];
const avg = oddAverage(num);
console.log(avg);

// 2nd way to used 2 loop
function oddAverageUsed2loop(numbers) {
  const odds = [];
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  for (const oddsNumbers of odds) {
    sum = sum + oddsNumbers;
  }
  const avg = sum / odds.length;
  console.log(odds, sum, odds.length);
  return "average of odd numbers using 2 loops : " + avg.toFixed(2);
}

const num2 = [10, 5, 7, 15, 25, 20, 9, 31, 3];
const avg2 = oddAverageUsed2loop(num2);
console.log(avg2);
