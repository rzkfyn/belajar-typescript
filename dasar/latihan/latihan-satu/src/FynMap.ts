export default class FynMap<T> {
    private data: any[];

    public constructor(){
        this.data = [];
    }

    public add(key: number, item: T): void{
        if (this.isExists(item)) return;
        this.data.push([key, item]);
    }

    public delete(key: number): void{
        this.data.forEach((item, i) => {
            if(item[0] == key){
                this.data.splice(i, 1);
            }
        });
    }

    public get(key: number): T | undefined {
        for (const item of this.data) {
            if (item[0] == key) return item[1];
        }
        return undefined;
    }

    public values(): any[] {
        const value: any[] = [];
        this.data.forEach(data => {
            value.push({
                key: data[0] as number,
                item: data[1] as T
            });
        });
        return value;
    }

    public indexOf(item: T): number | undefined{
        let index: number = 0;
        for (const data of this.data){
            if (data[1] == item) return index;
            index ++;
        }
        return undefined;
    }

    public keyOf(item: T): number | undefined {
        for (const data of this.data) {
            if (data[1] == item) return data[0];
        }
        return undefined;
    }

    private isExists(item: T): boolean {
        for (const data of this.data) {
            if(data[1] == item) return true;
        }
        return false;
    }
    
    private has(key: number): boolean {
        for (const data of this.data) {
            if(data[0] == key) return true;
        }
        return false;
    }
}