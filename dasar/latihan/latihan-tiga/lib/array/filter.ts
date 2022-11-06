const filter = <T>(arr: T[], condition: (item: T) => boolean ): T[] => {
  const result: T[] = [];
  arr.forEach((item: T) => {
    if (condition(item)) {
      result.push(item);
    }
  });
  return result;
}

export default filter;
