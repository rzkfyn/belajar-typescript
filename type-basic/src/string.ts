// Sama seperti Java kita bisa mendekalarasikan sebuah variable beserta dengan tipe data nya
let nama: string = "Sofyan"; // Atau let nama = "string disini";
/* 
nama akan dinisialisasi sebagai string oleh ts dan akan menimbulkan inline error
Jika nama diisi oleh tipe data selain string
*/ 

// nama = 89;
// Error karena nama sudah diinisialisasi sebagai string (meskipun js akan mengannggap ini bukan error)
nama = "89";
// nah kalo ini aman