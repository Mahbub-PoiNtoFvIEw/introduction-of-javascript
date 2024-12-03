function multiply(num1, num2){
    if(typeof num1 !== 'number' || num1 <= 0 || typeof num2 !== 'number' || num2 <= 0 ){
        return 'Please provide a valid number';
    }
    return num1 * num2;
}
console.log(multiply(5,-5));

function fullName(first, second){
    if(typeof first !== 'string' || typeof second !== 'string'){
        return 'please provide valid name';
    }
    return first + ' ' + second;
}
console.log(fullName('m','l'));