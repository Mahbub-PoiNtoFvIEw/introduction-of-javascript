/**
*** COMPARISON
* bigger: >
* less: <
* Equal: ==
* Greater than or equal: >=
* less than or equal: <=
* not equal: !=
--------------------
* and: &&
* or: ||
*/
// console.log(5 > 10);
// console.log(5 < 10);
// console.log(5 == 10);
// console.log(5 >= 10);
// console.log(5 <= 10);
// console.log(5 != 10);
// console.log(5 < 10 && 5 == 5);
// console.log(5 > 10 || 5 < 10);

// nested if else

const price = 1000;
const member = true;

if (member) {
  if (price >= 500) {
    //20% discount (if she/he member and buy above 500tk)
    const discount = (price * 20) / 100;
    const payMent = price - discount;
    console.log(payMent);
  }else{
    console.log('you have to buy above 500tk');
  }
}else{
    console.log('Your are not a member of ours');
}
// ternary nested conditions
member ? 
    price >= 500 ? 
      console.log(discount2 = price-(price * 20/100)):
      console.log('buy above 500'):
  console.log('not member');

// ticket fare calculate

var age = 35;
var regularTicketPrice = 800;
var student = true;
var discount, payMent;

if(age < 10){
  console.log("You are free because you are under 10");
}else if(age > 15 && age < 30){
   discount = regularTicketPrice * 50/100;
   payMent = regularTicketPrice - discount;
   console.log("As an student you got 50% of discount your ticket price is now = ",payMent,"TK");
}else if(age > 60){
   discount = regularTicketPrice * 15/100;
   payMent = regularTicketPrice - discount;
   console.log("As an senior citizen you got 15% of discount your ticket price is now = ",payMent,"TK");
}else{
  console.log("Your ticket price is ",regularTicketPrice,"TK");
}