class FynMap<T> {
  private datas: any[];

  public constructor() {
    this.datas = [];
  }

  public add(key: number | string, item: T): void {
    this.datas.push([key, item ]);
  }

  public getItem(key: number | string): T | undefined {
    for (const data of this.datas) {
      if (data[0] === key) return data[1];
    }
    return undefined;
  }

  public getIndex(item: T): number | string | undefined {
    for (const data of this.datas) {
      if (data[1] === item) return data[0];
    }
    return undefined;
  }

  public delete(key: number | string) {
    let index = 0;
    for (const data of this.datas) {
      if (data[0] === key) {
        this.datas.splice(index, 1);
        return true;
      } 
      index ++;
    }
    return false;
  }

  public values(): any[] {
    return this.datas;
  }

  public deleteAll(): void {
    this.datas = [];
  }
}

export default FynMap;