let products = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

let productsMap = products.reduce((acc, product) => {
    acc[product] = (acc[product] || 0)+1;
    return acc;
}, {});

let sortedProducts = Object.entries(productsMap).sort((a, b) => b[1] - a[1]).map(product => product[0]);

console.log("Mapped Products (by quantity):");
console.log(productsMap);

console.log("Sorted Products (by quantity):");
console.log(sortedProducts);