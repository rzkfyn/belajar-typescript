import FynMap from "./src/FynMap";

const barang = new FynMap<string>();

barang.add(1, 'Bambang');

console.log(barang.get(1));
console.log(barang.values());
console.log(barang.indexOf('Bambang'));
console.log(barang.keyOf('Bambang'));
barang.delete(1)
console.log(barang.values());