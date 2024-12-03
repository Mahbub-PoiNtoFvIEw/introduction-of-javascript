const products = [
    {id: 1, name: 'xiaomi phone one night', price: 12000},
    {id: 2, name: 'iphone', price: 12000},
    {id: 3, name: 'mac book air', price: 12000},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 12000},
    {id: 5, name: 'dell inspire laptop', price: 12000},
    {id: 6, name: 'samsung phone note seven', price: 12000},
    {id: 7, name: 'Phone one', price: 12000},
    {id: 7, name: 'M1 Laptop', price: 12000},
]

function matchedProduct(products, search){
    let matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
console.log(matchedProduct(products, 'laptop'));