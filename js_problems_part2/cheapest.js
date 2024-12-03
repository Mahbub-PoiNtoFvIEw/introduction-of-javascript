

const phones = [
  { brand_name: "Samsung", price: 30000, camera: "20mp", color: "Black" },
  { brand_name: "Xiomi", price: 20000, camera: "20mp", color: "Black" },
  { brand_name: "Oppo", price: 18000, camera: "20mp", color: "Black" },
  { brand_name: "Iphone", price: 100000, camera: "20mp", color: "Black" },
  { brand_name: "walton", price: 15000, camera: "20mp", color: "Black" },
  { brand_name: "Google-Pixle", price: 60000, camera: "20mp", color: "Black" },
];

function getCheapestPhone(phones) {
  let cheap = phones[0];
  for(const phone of phones){
    if(phone.price < cheap.price){
        cheap = phone;
    }
  }
  return cheap;
}

const cheapestPhone = getCheapestPhone(phones);
console.log('Cheapest Phone is : ',cheapestPhone);
