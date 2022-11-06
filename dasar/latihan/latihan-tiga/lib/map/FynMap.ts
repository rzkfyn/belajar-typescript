class FynMap<K, V> {
  private items: {
    key: K,
    value: V 
  }[] = [];

  public set = (key: K, value: V): void => {
    this.items.push({
      key, value
    });
  }

  public show = () => {
    const { items } = this;
    const res: {
      items: {
        item: [
          K, V
        ]
      }[]
    } = { items: [] };

    items.forEach((item, i) => {
      res.items.push({
        item: [
          item.key, item.value
        ]
      });
    });

    return res;
  }

  private findIndex = (identifier: K | V, byKey: boolean = true): number | boolean => {
    const { items } = this;
    const index = items.findIndex(({ key, value }: { key: K, value: V }) => byKey ? key === identifier : value === identifier);

    return index < 0 ? false : index;
  }

  private getItemByIndex = (index: number): { key: K, value: V } => {
    const { items } = this;
    const item: {
      key: K,
      value: V
    } = items[index];

    return item;
  }

  public getValue = (key: K): V | null => {
    const index = this.findIndex(key);
    if (index === false) return null;

    const item: {
      key: K,
      value: V
    } = this.getItemByIndex(index as number);

    return item.value;
  }

  public getKey = (val: V): K | null => {
    const index = this.findIndex(val, false);
    if (index === false) return null;

    const item: {
      key: K,
      value: V
    } = this.getItemByIndex(index as number);

    return item.key;
  }

  public remove = (key: K): void => {
    const { items } = this;
    const index = items.findIndex(({ key: itemKey } : { key: K }) => itemKey === key);
    if (index < 0) return
    items.splice(index, 1);
  }
}

export default FynMap;
