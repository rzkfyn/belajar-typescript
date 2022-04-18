import Hewan from "./src/Hewan";
import Katak from "./src/Katak";

/* kode dbahawah akan menyebabkan error karena Hewan merupakan class abstract */
// const hewan = new Hewan();

const komi = new Katak('darat dan laut', 2);
komi.bergerak();