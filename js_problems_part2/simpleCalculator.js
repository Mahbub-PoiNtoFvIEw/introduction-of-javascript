
function add(num1, num2){
    const total = num1 + num2;
    return total;
}
function subtraction(num1, num2){
    const total = num1 - num2;
    return total;
}
function multiplication(num1, num2){
    const total = num1 * num2;
    return total;
}
function divide(num1, num2){
    const total = num1 / num2;
    return total;
}

function calculator(a, b, operations){
    if(operations === 'add'){
        const result = add(a,b);
        return 'sum = '+ result;
    }else if(operations === 'subtraction'){
        const result = subtraction(a,b);
        return 'sub = '+ result;
    }else if(operations === 'multiplication'){
        const result = multiplication(a,b);
        return 'multi = '+ result;
    }else if(operations === 'divide'){
        return 'div = '+ divide(a,b);
    }else{
        return "only 'add', 'subtraction', 'multiplication', 'divide' operations are allowed";
    }
}
console.log(calculator(10,8,'add'));
console.log(calculator(10,8,'subtraction'));
console.log(calculator(10,8,'multiplication'));
console.log(calculator(10,8,'divide'));
