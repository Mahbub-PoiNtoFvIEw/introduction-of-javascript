// function declaration

// function name (parameter){
//     body;
// }

// call the function,

// function();

function square(number) {
  const borgo = number * number;
  console.log(borgo);
}
square(10);

// ----------------------------------

function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}
// ----------------------------------

add(15, 17);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// ----------------------------

const even = isEven(12);
console.log(even);
const odd = isEven(15);
console.log(odd);

// for a given string tell me weather it has even number of character or not
function evenSizedString(str) {
  const size = str.length;
  if (size % 2 === 0) {
    return ": it is a even number";
  } else {
    return false;
  }
}
const result = evenSizedString("dhaka");
console.log(result);

// objective: write a function to give me the sum of all numbers in an array

function sumOfNumbers(arr) {
  let sum = 0;
  for(const i of arr){
    sum = sum + i;
  }
  return sum;
}
const nums = [10, 20, 30, 40];
const sum = sumOfNumbers(nums);
console.log(sum);


// create a function that will return only even number
function evenNumbersOnly(numbers){
  let evens = [];
  for(const number of numbers){
    if(number % 2 === 0){
      evens.push(number);
    }
  }
  return evens;
}

const numbers = [24,15,5,20,10,7,40];
const even_numbers = evenNumbersOnly(numbers);
console.log('Al Even numbers :',even_numbers);

function sumOfEven(evenNumbers){
  let sum = 0;
  for(const evenNumber of evenNumbers){
    sum = sum + evenNumber;
  }
  return sum;
}
console.log('Sum of Al Even numbers :',sumOfEven(even_numbers));