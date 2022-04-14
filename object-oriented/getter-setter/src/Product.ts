/* Getter dan Setter */ 
// Setter dan Getter digunakan untuk mengisi dan mengambil isi dari
// Suatu properti pada class

export default class Product {
    private price: number = 0;
    private discount: number = 0.05;

    // Membuat getter diawali dengan kata kunci get
    public get getPrice(): number {
        return this.price;
    }

    public get getDiscount(): number {
        return this.discount;
    }

    // Membuat setter diawali dengan kata kunci set
    public set setDiscount(val: number) {
        this.discount = val;
    }

    public set setPrice(val: number) {
        this.price = val;
    }
}