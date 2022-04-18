/* Abstract Class */
// Class yang tidak bisa di instansiasi tetapi menjadi blue print bagi class class turunannya seperti interface 
// yang mana class class turunannya wajib implementasi method dan property abstractnya.
// Sebuah class abstract harus memiliki setidaknya satu method abstract

export default abstract class Hewan {
    protected tempatHidup: string;
    protected jumlahKaki: number;

    public constructor(tempatHidup: string, jumlahKaki: number){
        this.tempatHidup = tempatHidup;
        this.jumlahKaki = jumlahKaki;
    }

    public makan(): void {
        console.log('Hewan memakan makananya!');
    };
    public abstract bergerak(): void;
}