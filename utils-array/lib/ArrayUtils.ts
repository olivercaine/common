export interface INumberKeyMap<T> extends Map<number, T> {
  // Using map instead of array or object it's ~50% quicker:
  // https://gist.github.com/jung-kim/83676b2310c7c2a9c3d8
}

// Converts [{ id: 3, name: john }] to { 3 => { id: 3, name: john } }
export function arrayToNumberKeyMap<T>(array: T[]): INumberKeyMap<T> {
    const result: INumberKeyMap<T> = array.reduce((map: Map<number, T>, obj: T) => {
      // @ts-ignore
      map.set(obj.id, obj);
      return map;
    }, new Map());
    return result;
}

export function cloneArray<T>(array): T[] {
  return array.map((a) => ({...a}));
}
