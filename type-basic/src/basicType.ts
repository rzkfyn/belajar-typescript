// Sama seperti Java, pada TS kita bisa mendekalarasikan sebuah variable beserta dengan tipe data nya

/* String */
let nama: string = "Sofyan"; // Atau let nama = "string disini";
/* 
nama akan dinisialisasi sebagai string oleh ts dan akan 
menimbulkan inline error jika nama diisi oleh tipe data selain string
*/ 

// nama = 89;
// Error karena nama sudah diinisialisasi sebagai string (meskipun js akan menganggap ini bukan error)
nama = "89";
// nah kalo ini aman

/* Number */
let age: number;
//age = "Tujuh Belas"; // Error
/* 
age akan dinisialisasi sebagai number (integer) oleh ts dan akan 
menimbulkan inline error jika age diisi oleh tipe data selain number
*/
age = 17; // Aman