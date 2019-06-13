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

export function cloneArray<T>(array): T[] {
  return array.map((a) => ({...a}));
}

export const findById = (array: any[], id: number): any => {
  // tslint:disable-next-line
  for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) { return array[i]; }
  }
};

// export interface INumericalIndexMap<T> extends Map<number, T> {
//   // Using map instead of array or object it's ~50% quicker:
//   // https://gist.github.com/jung-kim/83676b2310c7c2a9c3d8
// }

// // Converts [{ id: 3, name: john }] to { 3 => { id: 3, name: john } }
// export function toNumericalIndexMap<T>(array: T[]): INumericalIndexMap<T> {
//     const result: INumericalIndexMap<T> = array.reduce((map: Map<number, T>, obj: T) => {
//       // @ts-ignore
//       map.set(obj.id, obj);
//       return map;
//     }, new Map());
//     return result;
// }
