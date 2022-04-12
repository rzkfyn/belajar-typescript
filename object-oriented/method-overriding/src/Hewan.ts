/* Method Overriding */
// Menulis ulang method yang ada pada parent element.
// Ketika method dengan nama yang sama tersebut dipanggil,
// maka yang akan dijalankan adalah method yang ada di child classnya.

export class Hewan {
    nama: string;
    jumlahKaki: number;

    public constructor(nama: string, jumlahKaki: number) {
        this.nama = nama;
        this.jumlahKaki = jumlahKaki;
    }

    public bernafas(): void {
        console.log(`${this.nama} sedang bernafas.`);
    }
}


export class Katak extends Hewan {
    public constructor(nama: string, jumlahKaki: number) {
        super(nama, jumlahKaki);
    }

    /**
     * @override Hewan.bernafas
     */
    public bernafas(): void {
        console.log(`${this.nama} malas bernafas.`);
    }
}