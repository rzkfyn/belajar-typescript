/* Latihan generic type */

class List<T>{
    private data: T[];

    public constructor(...elements: T[]){
        this.data = elements;
    }

    public add(element: T): void{
        this.data.push(element);
    }

    public addMultiple(...elements: T[]): void{
        this.data.push(...elements);
    }

    public getall(): T[]{
        return this.data;
    }
}

const buahBuahan = new List<string>('Apel', 'Anggur', 'Jeruk');
buahBuahan.add('Rambutan');
console.log(buahBuahan.getall());

class FynMap<T>{

    public constructor(private data: any[] = []){

    };

    public set(key: number, value: T): void{
        if(this.exist(value)) return;
        const item = [key, value];
        this.data.push(item);
    };

    public get(key: number): T | undefined {
        for(const item of this.data){
            if(item[0] == key) return item[1];
        };
        return undefined;
    };
    
    public delete(key: number): void {
        this.data.forEach((item, i) => {
            if(item[0] == key) {
                return this.data.splice(i, 1);
            };
        });
    };

    public values(): any[]{
        const value: any[] = [];
        this.data.forEach(item => {
            value.push({
                key: item[0],
                value: item[1]
            });
        });
        return value;
    }

    public clear(): void{
        this.data = [];
    }

    public has(key: number): boolean {
        for(const item of this.data){
            if(item[0] == key) return true;
        }
        return false;
    }
    
    public indexOf(value: T) : number | undefined{
        let index = 0;
        for(const item of this.data){
            if(item[1] == value) return index;
            index ++;
        }
        return undefined;
    }

    public keyOf(value: T) : number | undefined{
        for(const item of this.data){
            if(item[1] == value) return item[0];
        }
        return undefined;
    }
    
    private exist(value: T): boolean{
        for(const item of this.data){
            if(item[1] == value) return true;
        }
        return false;
    }
}

const numbers = new FynMap<number>();
numbers.set(1, 25);
numbers.set(2, 44);
numbers.set(3, 89);
numbers.set(4, 99);
numbers.set(6, 99);
numbers.set(7, 89);
console.log(numbers.values());
console.log(numbers.get(1));
console.log(numbers);


const hari = new FynMap<string>();
hari.set(0, 'Minggu');
hari.set(1, 'Senin');
hari.set(2, 'Selasa');
hari.set(3, 'Rabu');
hari.set(4, 'Kamis');
hari.set(5, 'Jumat');
hari.set(6, 'Sabtu');

// console.log('Sekarang adalah hari',hari.get(new Date().getDay()));
console.log(hari);