/* Static Method dan Property */ 
// Static property dan method merupakan property dan method
// Yang bisa langsung di akses / digunakan tanpa menginisialisasi sebuah objek

export default class Katak {
    public static kaki: number = 2;

    public static lompat() {
        return `Kata melompat menggunakan ke ${this.kaki} kaki nya.`;
    }

    public getKaki() {
        // Tidak bisa menggunakan this karena property yang dimaksud static
        // dan tidak berada pada konteks objek.
        // return this.kaki; // error

        // use this instead
        return Katak.kaki;
    }
}