/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const mynewarray = [];
  for (const item of array) {
    mynewarray.push(appendString + item);
  }

  return mynewarray;
}
