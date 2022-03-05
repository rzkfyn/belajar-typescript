// Abstract class
/*
Abstract class merupakan class yang tidak bisa di inisialisasi di class itu sendiri dan harus
di extends ke child class untuk bisa di inisialisasi
*/

/* Abstract class dibuat dengan menambah keyword abstract saat pembuatan class */
abstract class Vehicle {
    public abstract wheels: number;

    public start(): void{
        console.log('Broom');
    };

    /* Abstract class wajib setidaknya memiliki satu method abstract */
    public abstract stop(): void;
}

class Car extends Vehicle {

    /* 
    Child class yang extends class abstract wajib memiliki / 
    mengimplementasikan property dan method abstract dari parentnya 
    */
    public wheels: number = 4;

    public stop(): void {
        console.log('Stopped');
    }
}

class Bike extends Vehicle {
    public wheels: number = 2;

    public stop(): void {
        console.log('Stopped');
    }
}
/* Error karena kelas abstrak tidak boleh / bisa di inisialisasi*/
// const kendaraan = new Vehicle();

const mobil = new Car();
const motor = new Bike();
console.log(motor.wheels);
motor.start();
console.log(mobil.wheels);
mobil.start();