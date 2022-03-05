// Enum merupakan tipe data yang menyimpan sekumpulan data constant (Konstanta)

// Numeric Enum
// enum Month{
//     JAN,
//     FEB,
//     MAR = 200,
//     APR, // = 201 cuz numeric enum is auto increment
//     MAY,
//     JUN,
//     JUL,
//     AUG,
//     SEP,
//     OCT,
//     NOV,
//     DEC
// }

// console.log(Month.APR);

// String Enum
enum Month{
    JAN = 'January',
    FEB = 'February',
    MAR = 'March',
    APR = 'April',
    MAY = 'May',
    JUN = 'June',
    JUL = 'July',
    AUG = 'August',
    SEP = 'September',
    OCT = 'October',
    NOV = 'Nobember',
    DEC = 'December'
}

console.log(Month.DEC);