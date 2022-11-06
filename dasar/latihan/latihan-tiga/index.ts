import filter from './lib/array/filter';
import FynMap from './lib/map/FynMap';

const waifu = [
  'Yoroizuka',
  'Elaina',
  'Isla',
  'Miku'
];
const filteredWaifu = filter<string>(waifu, (item) => item.startsWith('Y'));
console.log(filteredWaifu);

const map = new FynMap<string, string | number>();
map.set('Hello', 'world');
map.set('waifu', 'yoroizuka');
console.log(map.getValue('waifu'));
console.log(map.getKey('yoroizuka'));
map.remove('waifu');
console.log(map.getValue('waifu'));
map.set('yoroizuka', 'mizore');
console.log(map.show());
