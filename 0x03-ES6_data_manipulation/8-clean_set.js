/* eslint-disable array-callback-return */
/*
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string
 * @param {Set<String>} set - A collection of strings.
 * @param {startString} startString - The string to strip from
 * the beginning.
 * of each item in the set
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((val) => (val !== undefined ? val.startsWith(startString) : ''))
    .map((val) => (val !== undefined ? val.slice(startString.length) : ''))
    .join('-');
}
