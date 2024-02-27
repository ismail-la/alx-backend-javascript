export default function createIteratorObject(report) {
  const mynewarray = [];
  for (const item of Object.values(report.allEmployees)) {
    mynewarray.push(...item);
  }
  return mynewarray;
}
