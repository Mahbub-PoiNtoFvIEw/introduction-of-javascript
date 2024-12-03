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

const price = 800;
const buy = 1000;
const member = true;

if (member) {
  if (price >= buy) {
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
