
function inchToFeet(inch) {
    const feetNumber = parseInt(inch / 12);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'ft ' + inchRemaining + 'inch.';
    return result;
}
console.log(inchToFeet(75));