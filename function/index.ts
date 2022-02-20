// Sama seperti pada bahasa pemrograman yag yang menganut static typed pada variable dan function seperti java
// Pada ts juga kita bisa menuliskan / menentukan tipe data dari return value sebuah function

// format
/*
tipe data dari return value function yang kita buat, ditulis disini dengan tanda titik dua (:)
function iniFungsi(): string {
    return "Ini string";
    // jenis tipe data yang di return harus sesuai dengan yang kita tuliskan diatas jika tidak maka akan menimbulkan inline error
}
*/

/* Contoh function dengan return value */
function getName(): string{
    return 'Rizki Sofyan';
}

function getAge(): number{
    return 17;
}

function getWaifuList(): string[]{
    return ['Mizore Yoroizuka', 'Isla', 'Sajuna Inui'];
}

/* Contoh function tanpa return value (void)*/
function printNama(): void{
    console.log('Rizki Sofyan');
}

printNama();

// Argument types pada function
// Kita bisa menentukan tipe data apa yang akan digunakan pada sebuah function

/* contoh */
function multiply(val1: number, val2: number): number{
    return val1 * val2;
}

console.log(multiply(10, 2));
// console.log(multiply(10, 'wagy wangy')); // Error

function printData(name: string, age: number): string{
    return `Name : ${name}\nAge : ${age}`;
}
console.log(printData('Rizki Sofyan', 17));
// console.log(printData('Rizki Sofyan', '17')); // Error