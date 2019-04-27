export interface IDictionary<T> {
    [Key: number]: T;
}

export function indexArray<T>(array: T[]): IDictionary<T> {
    const index = {};
    array.forEach((object) => {
      // @ts-ignore
      index[object.id] = object;
    });
    return index;
}

export function cloneArray(array) {
  return array.map((a) => ({...a}));
}
