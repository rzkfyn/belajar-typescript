/* Property dan Method */
// Property merupakan sebuah atribut yang terdapat pada class yang tentunya akan dimiliki object yang mengintansiasi class tersebut
// Method merupakan sebuah fungsi yang terdapat pada class

export default class Hewan {
    // Property
    public nama: string;
    public jumlahKaki: number;
    public tempatHidup: string;

    public constructor(nama: string, jumlahKaki: number, tempatHidup: string) {
        this.nama = nama;
        this.jumlahKaki = jumlahKaki;
        this.tempatHidup = tempatHidup;
    }

    // Method
    public berjalan() {
        console.log(`${this.nama} berjalan dengan menggunakan ${this.jumlahKaki} kaki.`);
    }
}