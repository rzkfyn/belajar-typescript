// Class Dasar
/*
Sama sepertu js (es 6) pada ts juga kita bisa melakukan oop dengan membuat sebuah class
bedanya, pada ts kita bisa menggunakan access modifier seperti public, protected, dan private
yang mana akan berprilaku seperti bahasa oop lainnya
*/

// Membuat class baru dengan menggunakan contructor
// class User {
//     public name: string;
//     public age: number;

//     public constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }

//     // Kode diatas bisa juga ditulis seperti berikut
//     /*
//     public constructor(public name: string, public age: number){
//         // Tidak perlu mengisi atribut karena akan otomatis diisi
//     }
//     hasilnya akan sama saja seperti kode diatas tapi yang ini terlihat lebih simple
//     */
// }

// // inisialisai objek baru
// const Sofyan = new User('sofyan', 17);
// console.log(Sofyan.name);

// Inheritance (Pewarisan)
/*
Inheritance atau pewarisan pada ts berprilaku sama seperti pada bahasa oop lainnya dimana class turunan
akan mewarisi semua atribut dan method yang visible dari parent class nya. Visible disini maksudnya segala
atribut yang memiliki access modifier public dan protected.
*/
/*
public : Bisa diakses dimanapun bahkan diluar class
protected : Hanya bisa diakses oleh class tersebut dan class turunannya
private : Hanya bisa di akses didalam class tersebut
*/
class User{
    private name: string;
    private age: number;

    public constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    public setName(name: string): void{
        this.name = name;
    }

    public getName(): string{
        return this.name;
    }
}

/* untuk melakukan pewarisan, menggunakan keyword extends dilanjutkan dengan nama parent class nya */
class Admin extends User{
    public read: boolean = true;
    public write: boolean = true;

    public getRole(): {read: boolean, write: boolean}{
        return {
            read: this.read,
            write: this.write
        };
    }
}

/* 
Meski class Admin tidak memiliki constructor, tapi class Parentnya memiliki constructor 
oleh karena itu tetap harus menyertakan argumen yang diperlukan constructor karena class Admin
mewarisi constructor method dari class User
*/
const admin = new Admin('Sofyan', 17);
console.log(admin.getRole());

/* Karena Admin turunan dari User, Admin bisa  menggunakan method milik User */
console.log(admin.getName());