/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let out = '';

  for (const [index, item] of Object.entries(reportWithIterator)) {
    out += `${item}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      out += ' | ';
    }
  }

  return out;
}
