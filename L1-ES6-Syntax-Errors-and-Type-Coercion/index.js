const checkout = {

items: [],

total: 0,

addItem(item) {
    item.price = Number(item.price);

if (isNaN(item.price)) {

console.log("Invalid price.");

return;

}

this.items.push(item);

this.total += item.price;

},

getTotal() {
  return `Total: $${this.total.toFixed(2)}`;
}
};

checkout.addItem({ name: "Coffee Maker", price: "99.95" });

checkout.addItem({ name: "Milk", price: 3.50 });

checkout.addItem({ name: "Bread", price: "aaaa.7" });

console.log(checkout.getTotal());