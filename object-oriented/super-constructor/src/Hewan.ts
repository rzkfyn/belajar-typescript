/* Super Constructor / Super Method*/
// Merupakan method yang berfungsi untuk memanggil / menjalankan cunstructor method yang ada pada parent element.

export class Hewan {
    nama: string;
    jumlahKaki: number;

    public constructor(nama: string, jumlahKaki: number) {
        this.nama = nama;
        this.jumlahKaki = jumlahKaki;
    }
}


export class Katak extends Hewan {
    public beracun: boolean;

    public constructor(beracun: boolean, nama: string, jumlahKaki: number) {
        // Method super ini akan memanggil constructor pada class Hewan.
        super(nama, jumlahKaki);
        this.beracun = beracun;
    }
}