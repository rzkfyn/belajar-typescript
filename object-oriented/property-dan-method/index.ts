import Hewan from "./src/Hewan";

const kucing = new Hewan('Kucing', 4, 'darat');

/* Memanggil method dan property pada object */
// Memanggil property
console.log(kucing.nama);
// Memanggil method
kucing.berjalan();

console.log();

/* Mengubah property dan  method pada object */
// *Hanya bisa jika property dan method ber hak akses public
kucing.nama = 'Kocheng';
kucing.berjalan = function() {
    console.log(`${this.nama} berjalan dengan menggunakan ke ${this.jumlahKaki} kaki nya.`);
}
console.log(kucing.nama);
kucing.berjalan();
