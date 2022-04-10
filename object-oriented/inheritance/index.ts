import Burung from './src/Burung';

const elang = new Burung();
/* 
pada class Burung tidak terdapat properti nama dan method bernafas, tapi karena class Burung extends pada class Hewan 
dan nama dan bernafas memiliki access modifier public, jadi Burung memiliki properti nama dan method bernafas.
*/
elang.nama = 'Elang';

elang.bernafas();
console.log(elang);
