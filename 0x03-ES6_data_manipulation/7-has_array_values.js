/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @returns {Boolean}
 */
export default function hasValuesFromArray(Set, array) {
  return array.every((val) => set.has(val));
}
