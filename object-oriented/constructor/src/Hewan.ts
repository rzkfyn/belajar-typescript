/* Constructor */
// Merupakan sebuah method yang akan dipanggil pertama kali 
// ketika sebuah kelas di instansiasi kepada object
export class Hewan {
    // contoh 
    public constructor() {
        console.log(`Class di instansiasi`); // Ini akan membuat 'Class di instansiasi' di cetak ke console ketika class dipanggil (di instansiasi)
    }
}

/* Constructor untuk mengisi properti pada class */

export class Hewan2 {
    nama: string;
    jumlahKaki: number;

    public constructor(nama: string, jumlahKaki?: number) {
        // this.properti mengacu pada properti properti di atas
        this.nama = nama;
        this.jumlahKaki = jumlahKaki ? jumlahKaki : 12;
    }

    /* Bisa Juga Dengan : */
    /*
    public constructor(public nama: string, public jumlahKaki: number) {}
    */
    // Hasilnya sama saja seperti diatas walau tanpa menginisialisasi propertinya.
}
