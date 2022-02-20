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