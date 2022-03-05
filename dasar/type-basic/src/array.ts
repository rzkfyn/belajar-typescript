// Juga sama seperti java, kita bisa menentukan array yang kita deklarasikan untuk menampung data berjenis apa

/* Array Menampung Data String */
let arrstr: string[] = ["satu", "dua", "tiga"];
// arrstr = ["satu", 2, true] // error

/* Array Menampung Data String */
let arrnum: number[];
// arrnum = ["satu",, 2, 3, {nama : "nama"}]; // error
arrnum = [1,2,3];

/* Array Untuk Menampung Data Boolean */
let arrbool: boolean[];
// arrbool = ["true", false, ["Hello", "World"]]; // error
arrbool = [true, false, 3 < 5];

// Array tuple
/* Array yang elemennya sudah kita tentukan jumlah elemen dan tipenya harus seperti apa */
let arrtuple: [string, number];
arrtuple = ['Sofyan', 17];
// arrtuple = ['Sofyan', true]; // error
// arrtuple = ['Sofyan', 17, 'Wibu']; //Juga error