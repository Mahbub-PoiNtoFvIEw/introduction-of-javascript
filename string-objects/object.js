const computers = {
    brand: 'Lenovo',
    price: 50000,
    processor: 'intel',
    monitor: ['hp','samsung','walton'],
}
for(let i = 0; i < computers.monitor.length; i++){
    console.log(computers.monitor[i]);
}
//keys only return only property as an array
const k = Object.keys(computers);
console.log(k);
// values return only value of property
const v = Object.values(computers);
console.log(v);

// loping in objects

const mobile = {
    brand:'google pixle',
    price: 5000,
    color:'black',
    camera:'12 mp',
}

// for in : it is used to objects
// for of : to array

for(const i in mobile){
    console.log(mobile[i]);
}

const keys = Object.keys(mobile);
for(const key of keys){
    console.log('display object as an array :',mobile[key]);
}