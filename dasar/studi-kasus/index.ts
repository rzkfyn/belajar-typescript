import Asus from './src/products/Asus';
import Macbook from './src/products/MacBook';

const asus = new Asus<string>('Zenbook', true, true);
console.log(asus);
asus.a();
const macBook = new Macbook(2017, false, false);
console.log(macBook);
console.log(asus.name);