// let a = 100;
// let b = 250;
// let c = 200;
// if(a > b && a > c ){
//     console.log(a);
// }else if(b > a && b > c){
//     console.log(b);
// }else if(c > a && c > b){
//     console.log(c);
// }

let number = [1000,250,300,2800,30];
let max= 0;
for(let i = 0; i < number.length; i++){
    if(number[i] > max){
        max = number[i];
    }
}
console.log('max :', max);