const products = [
  { name: "Shampoo", price: 500,quantity: 2},
  { name: "Chiruni", price: 200,quantity: 1},
  { name: "Shirt", price: 1500,quantity: 3},
  { name: "Pant", price: 2500,quantity: 4},
];

function cartTotal(products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}
const shoppingCost = cartTotal(products);
console.log('Total bills, That you have to pay : ',shoppingCost);