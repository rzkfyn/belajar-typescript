// Interface
/*
Interface merupakan blue print atau kontrak yang jika sebuah class mengimplementasikannya, property dan methodnya
harus sama dengan yang ada pada interface yang diimplementasikan
*/
interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop{
    /* Semua property dan method pada interfacenya harus disertakan */
    name: string = 'Asus';
    isGaming: boolean;

    constructor(name: string, isGaming:boolean){
        this.name = name;
        this.isGaming = isGaming;
    }

    on(): void {
        console.log('Menyala');
    }

    off(): void {
        console.log('Mati');
    }
}

const asus = new Asus('Asus', true);
asus.on();