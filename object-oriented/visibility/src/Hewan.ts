/* Visibility */
// Digunakan untuk membatasi atau mengatur hak akses dari setiap property dan method yang ada di dalam class
// Terdapat tiga (empat sih kalo ts) jenis visibility yaitu public, protected dan private
export class Hewan {
    /* Private */
    // Hanya bisa di akses pada class ini saja
    // Yang artinya tidak bisa di akses dari luar class ini
    // Meski pada child class yang extends ke class ini
    private nama: string;
    private jumlahKaki: number;

    public constructor(nama: string, jumlahKaki: number) {
        this.nama = nama;
        this.jumlahKaki = jumlahKaki;
    }

    /* Protected */
    // Bisa di akses pada class ini dan class turunannya
    // Sama seperti private, protected tidak bisa di akses di
    // luar class.
    protected get getNama(): string {
        return this.nama;
    }
    
    /* Public */
    // Bisa di akses dimanapun meski di luar dari class.
    // berbeda dengan private dan protected yang tidak bisa di akses di
    // luar class.
    public set setNama(nama: string) {
        this.nama = nama;
    }
}


export class Katak extends Hewan {
    public constructor(nama: string, jumlahKaki: number) {
        super(nama, jumlahKaki);
    }

    public bernafas(): void {
        // getNama memiliki hak akses protected yang artinya class ini bisa mengaksesnya.
        console.log(`${this.getNama} sedang bernafas.`);
    }
}