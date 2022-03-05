// Pada Ts kita bisa menentukan tipe data dari elemen yang akan menjadi isi dari sebuah object

/* contoh */
type User = {
    name: string,
    age: number
}

const sofyan: User = {
    name: 'Riki Sofyan',
    age: 17
}

// const bambang: User = {
//     name: 'Bambang Sutejo',
//     age: 21,
//     address: 'Isekai'
// } // Error