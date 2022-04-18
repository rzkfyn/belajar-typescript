import Asus from "./src/Asus";
import Game from "./src/Game";

const asus = new Asus('M Series');
const minecraft = new Game(asus);

minecraft.home();
minecraft.back();
minecraft.menu();