/* Inheritance */

// Merupakan konsep dimana sebuah kelas dapat menurunkan properti dan methodnya YANG VISIBLE ke class yang extend terhadap class tersebut.
// Visible disini maksudnya class yang di extend hanya akan menurunkan properti dan methodnya yang memiliki access modifier berjenis public dan protected.

export default class Hewan {
    public nama = '';
    public jumlahKaki = 2;

    public bernafas(): void{
        console.log(`${this.nama} bernafas`);
    }
}
