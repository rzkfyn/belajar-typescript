// Class Dasar
/*
Sama sepertu js (es 6) pada ts juga kita bisa melakukan oop dengan membuat sebuah class
bedanya, pada ts kita bisa menggunakan access modifier seperti public, protected, dan private
yang mana akan berprilaku seperti bahasa oop lainnya
*/

// Membuat class baru dengan menggunakan contructor
class User {
    public name: string;
    public age: number;

    public constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    // Kode diatas bisa juga ditulis seperti berikut
    /*
    public constructor(public name: string, public age: number){
        // Tidak perlu mengisi atribut karena akan otomatis diisi
    }
    hasilnya akan sama saja seperti kode diatas tapi yang ini terlihat lebih simple
    */
}

// inisialisai objek baru
const Sofyan = new User('sofyan', 17);
console.log(Sofyan.name);