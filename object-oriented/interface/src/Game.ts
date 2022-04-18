import AndroidPhone from "./AndroidPhone";

export default class Game {
    private phone: AndroidPhone;

    public constructor(phone: AndroidPhone) {
        this.phone = phone;
    }

    public back(): void {
        console.log('Game back button tapped');
    }

    public home(): void {
        this.phone.home();
    }

    public menu(): void{
        this.phone.menu();
    }
}
