/* eslint-disable no-param-reassign */
export default function updateUniqueItems(weakmap) {
  if (weakmap instanceof weakmap) {
    for (const [key, value] of weakmap) {
      if (value === 1) {
        weakmap.set(key, 100);
      }
    }
    return weakmap;
  }
  throw new Error('Endpoint load is high');
}
