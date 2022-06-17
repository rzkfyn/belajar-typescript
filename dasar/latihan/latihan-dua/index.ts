import FynMap from "./src/FynMap";

const map = new FynMap<string>();

map.add(1, 'Bambang');
map.add(2, 'Ujang');
console.log(map.values());
console.log(map.getIndex('Bambang'));
console.log(map.delete(1));
console.log(map.values());