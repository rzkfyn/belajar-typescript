import AndroidPhone from "./AndroidPhone";

export default class Asus implements AndroidPhone {
    private serie: string;

    public constructor(serie: string) {
        this.serie = serie;
    }

    public home(): void {
        console.log('Home tapped');
    }

    public back(): void {
        console.log('Back tapped');
    }

    public menu(): void {
        console.log('Menu tapped');
    }
}