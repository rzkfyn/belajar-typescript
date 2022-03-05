// Generic Type
/*
Digunakan unutuk memberi tahu typescript fungsi apa yang akan digunakan 
daripada menggunakan any kita bisa menggunakan generic type untuk menghindari
error
*/

// Penggunaan generic type (tidak terbatas dengan 'T' tapi kebanyakan programmer ts menggunakannya (sudah menjadi kebiasaan))

function myData<T>(value: T){
    return value;
}

console.log(myData('Sofyan').length);

// Error
// console.log(myData(123).length);

/* Penggunaan generic type pada arrow function */
const arrowFunc = <T>(value: T) => {
    return value;
}