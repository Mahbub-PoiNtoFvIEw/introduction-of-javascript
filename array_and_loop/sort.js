/**
 * Ascending - smaller to larger
 * Descending - larger to smaller
 */
const numbers = [5,7,2,8,1,62,10];
// sort using library function, its not working properly but to work properly need some changes
// ... its means copy of array
const numbers_asc = [...numbers].sort(function(a, b){return a - b});
const numbers_dsc = [...numbers].sort(function(a, b){return b - a});
console.log(numbers_asc);
console.log(numbers_dsc);
