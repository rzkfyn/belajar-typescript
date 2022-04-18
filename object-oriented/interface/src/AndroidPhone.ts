/* Interface */
// Merupakan sebuah kontrak dimana jika sebuah class implements pada sebuah interface,
// maka class itu wajib mengimplementasikan seluruh method dan property yang ada pada interface tersebut.

export default interface AndroidPhone {
    home(): void;
    menu(): void;
    back(): void;
}