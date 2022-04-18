import Hewan from "./Hewan";

export default class Katak extends Hewan {
    public constructor(tempatHidup: string, jumlahKaki: number){
        super(tempatHidup, jumlahKaki);
    }
    

    /* Wajib implementasi property / method dari class abstract */
    public bergerak(): void {
        console.log('Katak bergerak dengan cara melompat!');
    }
}