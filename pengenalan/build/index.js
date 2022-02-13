"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printData() {
        return `Nama : ${this.name}\nUmur: ${this.age}`;
    }
}
const sofyan = new User('Sofyan', 17);
console.log(sofyan.printData());
