import Product from "./src/Product";

const product1 = new Product();

product1.setPrice = 2000;
product1.setDiscount = 3000;

console.log(product1.getPrice);
console.log(product1.getDiscount);

