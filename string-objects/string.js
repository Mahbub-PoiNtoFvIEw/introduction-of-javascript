
/**
 * string is immutable -> 'not changeable'
 * array is mutable -> 'you can change the array elements'
 */

// compare string, best practice is to convert string to upper or lowercase;
// string compare korar somoy jodi kono white space thake thahole setake o thik kore nite hobe
// trim() to remove white space

const book = 'chemistry';
const subject = 'ChemisTry ';

if(book.toLowerCase().trim() === subject.toLowerCase().trim()){
    console.log('comparison match');
}else{
    console.log('not match');
}

// .slice(start,end)
