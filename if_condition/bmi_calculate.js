
// 5 ft = 5 x 30.48 feet to cm
// divide the number of centimeters by 100, cm to m

var foot = 5.5;
var centiMeter = foot * 30.48;
var meter = centiMeter / 100;
var height = meter * meter;
var weight = 65;
var BMI = weight / height;
console.log(centiMeter.toFixed(2));
// console.log(meter.toFixed(2));
// console.log(height.toFixed(2));
// console.log(BMI.toFixed(2));
if(BMI < 18.5){
    console.log(BMI.toFixed(2),"your are underweight !!!");
}else if(BMI >= 18.5 && BMI <= 24.9){
    console.log(BMI.toFixed(2),"Your are normal !");
}else if(BMI >= 25 && BMI <= 29.9){
    console.log(BMI.toFixed(2),"Your are overweight");
}else{
    console.log(BMI.toFixed(2),"Your are obese");
}
